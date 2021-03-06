import * as jwt from "jsonwebtoken"
import jwksClient from "jwks-rsa"
import request from "request"
import { Context } from "../utils"
import get from "lodash.get"
import { User } from "../prisma"

const jwks = jwksClient({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 1,
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
})

export async function validateAndParseIdToken(idToken) {
  return new Promise((resolve, reject) => {
    const { header, payload } = jwt.decode(idToken, { complete: true }) as any
    if (!header || !header.kid || !payload) reject(new Error("Invalid Token"))
    jwks.getSigningKey(header.kid, (err, key) => {
      if (err) reject(new Error("Error getting signing key: " + err.message))
      jwt.verify(
        idToken,
        (key as any).publicKey,
        { algorithms: ["RS256"] },
        (err, decoded) => {
          if (err) reject("jwt verify error: " + err.message)
          resolve(decoded)
        }
      )
    })
  })
}

// retrieves the user indicated by the JWT token on the request.
// If no such user exists, throws an error.
export async function getUserFromContext(ctx: Context): Promise<User> {
  return new Promise(async function getCustomerFromToken(resolve, reject) {
    if (!ctx.req.user) {
      reject("no user on context")
    }

    // Does such a user exist?
    const auth0Id = ctx.req.user.sub.split("|")[1] // e.g "auth0|5da61ffdeef18b0c5f5c2c6f"
    const userExists = await ctx.prisma.$exists.user({ auth0Id })
    if (!userExists) {
      reject("token does not correspond to any known user")
    }

    // User exists. Let's return
    let user = await ctx.prisma.user({ auth0Id })
    resolve(user)
  })
}

export function createAuth0User(
  email: string,
  password: string,
  details: {
    firstName: string
    lastName: string
  }
): Promise<string> {
  const { firstName, lastName } = details
  return new Promise(function CreateUserAndReturnId(resolve, reject) {
    request(
      {
        method: "Post",
        url: `https://${process.env.AUTH0_DOMAIN}/dbconnections/signup`,
        headers: { "content-type": "application/json" },
        body: {
          given_name: firstName,
          family_name: lastName,
          email,
          password,
          client_id: `${process.env.AUTH0_CLIENTID}`,
          connection: `${process.env.AUTH0_DB_CONNECTION}`,
        },
        json: true,
      },
      function handleResponse(error, response, body) {
        // Handle a generic error
        if (error) {
          return reject(new Error(`Error creating Auth0 user: ${error}`))
        }
        // Give a precise error message if a user tried to sign up with an
        // email that's already in the db
        if (response.statusCode == 400 && body.code === "invalid_signup") {
          return reject(new Error("400 -- email already in db"))
        }
        // Give a precise error message if a user tried to sign up with
        // a insufficiently strong password
        if (
          response.statusCode == 400 &&
          body.name === "PasswordStrengthError"
        ) {
          return reject(new Error(`400 -- insufficiently strong password.`))
        }
        // If any other error occured, expose a generic error message
        if (response.statusCode != 200) {
          return reject(
            new Error(
              `Error creating new Auth0 user. Auth0 returned ` +
                `${response.statusCode} with body: ${JSON.stringify(body)}`
            )
          )
        }
        return resolve(body._id)
      }
    )
  })
}

export function getAuth0UserAccessToken(
  email,
  password
): Promise<{
  access_token: string
  refresh_token: string
  expires_in: number
}> {
  return new Promise(function RetrieveAccessToken(resolve, reject) {
    request(
      {
        method: "Post",
        url: `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
        headers: { "content-type": "application/json" },
        body: {
          grant_type: "password",
          username: email,
          password: password,
          scope: "offline_access",
          audience: `${process.env.AUTH0_AUDIENCE}`,
          client_id: `${process.env.AUTH0_CLIENTID}`,
          client_secret: `${process.env.AUTH0_CLIENT_SECRET}`,
        },
        json: true,
      },
      function handleResponse(error, response, body) {
        if (error) {
          return reject(new Error(`Error retrieving access token: ${error}`))
        }
        if (response.statusCode != 200) {
          return reject(
            new Error(
              `Error retrieving access token from Auth0. Auth0 returned ` +
                `${response.statusCode} with body: ${JSON.stringify(body)}`
            )
          )
        }
        return resolve(body)
      }
    )
  })
}
export interface UserRequestObject {
  iss: string
  sub: string
  aud: string
  iat: number
  exp: number
  azp: string
  scope: string
  gty: string
  updatedAt: string
  email: string
  role: string
  lastName: string
  firstName: string
  id: string
  createdAt: string
  auth0Id: string
}

export function getUserRequestObject(ctx: Context): UserRequestObject {
  const user = ctx.req.user
  if (user) {
    return user
  }

  throw new AuthError()
}

export async function createPrismaUser(
  ctx: Context,
  { auth0Id, email, firstName, lastName }
) {
  const user = await ctx.prisma.createUser({
    auth0Id,
    email,
    firstName,
    lastName,
  })
  return user
}

export class AuthError extends Error {
  constructor() {
    super("Not authorized")
  }
}

export const isLoggedIn = ctx => {
  return !!get(ctx, "req.user")
}

export const getUserIfExists = ctx => {
  const user = get(ctx, "req.user")
  if (!user) throw new Error(`Not logged in`)
  return user
}
