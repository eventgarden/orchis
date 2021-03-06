import { serverOptions } from "./server"
import { ApolloServer } from "apollo-server-express"
import express from "express"
import { checkJwt } from "./middleware/jwt"
import { createGetUserMiddleware } from "./middleware/user"
import { prisma } from "./prisma"
import cors from "cors"
import bodyParser from "body-parser"

// Set up the server
const server = new ApolloServer(serverOptions)
const app = express()
app.use(
  checkJwt,
  createGetUserMiddleware(prisma),
  cors({
    origin: [/\.event\.garden$/, "eventgarden-oak.herokuapp.com", /localhost/],
    credentials: true,
  }),
  bodyParser.json()
)
server.applyMiddleware({ app, path: "/" })
app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at ${process.env.PORT || 4000}`)
)

// Note: for more information on using ApolloServer with express, see
// https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express
