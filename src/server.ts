import { schema } from "./schema"
import { prisma } from "./prisma"
import { Prisma } from "prisma-binding"
// import Analytics from "analytics-node"

const defaultQuery = `{
  event {
    id
    name
    description
  }
}
`

export const db = new Prisma({
  typeDefs: "./src/prisma/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT || "http://localhost:3306",
  secret: process.env.PRISMA_SECRET,
})

export const serverOptions = {
  schema,
  context: ({ req, res }) => ({
    req,
    res,
    prisma,
    db,
  }),
  introspection: true,
  formatError: error => {
    console.log(error)
    return error
  },
  playground: {
    settings: {
      "editor.theme": "dark" as any,
    },
    tabs: [
      {
        endpoint: "/",
        query: defaultQuery,
      },
    ],
  },
  plugins: [],
}
