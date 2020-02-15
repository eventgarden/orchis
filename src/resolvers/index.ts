import { Query } from "./Query"
import { auth } from "./Mutation/auth"
import { Me } from "./Me"

export default {
  Query,
  Mutation: {
    ...auth,
  },
  Me,
}
