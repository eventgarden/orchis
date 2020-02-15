import { Context } from "../utils"
import { getUserRequestObject } from "../auth/utils"

export const Me = {
  user: async (parent, args, ctx: Context) => {
    const { id } = await getUserRequestObject(ctx)
    return ctx.prisma.user({ id })
  },
}
