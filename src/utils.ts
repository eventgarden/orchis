import { Prisma, User } from "./prisma"
import { Binding } from "graphql-binding"
import { Request, Response } from "express"
import crypto from "crypto"

export function getUserIDHash(userID: string): string {
  return crypto
    .createHash("sha256")
    .update(`${userID}${process.env.HASH_SECRET}`)
    .digest("hex")
}

export async function getUserFromUserIDHash(
  prisma: Prisma,
  userIDHash: string
): Promise<User | null> {
  const allUsers = await prisma.users()
  return new Promise((resolve, reject) => {
    let targetUser
    for (let user of allUsers) {
      let thisUsersIDHash = getUserIDHash(user.id)
      if (thisUsersIDHash === userIDHash) {
        targetUser = user
      }
    }
    if (targetUser === undefined) {
      resolve(null)
    } else {
      resolve(targetUser)
    }
  })
}

export interface Context {
  prisma: Prisma
  db: Binding
  req: Request & { user: any }
  res: Response
}
