export function createGetUserMiddleware(prisma) {
  return (req, res, next) => {
    // Get auth0 user from request
    const auth0User = req.user
    if (!auth0User) {
      return next()
    }

    // Get user from prisma
    const { sub } = auth0User
    const auth0Id = sub.split("|")[1]
    prisma
      .user({ auth0Id })
      .then(function putUserOnRequestAndAddUserToSentryContext(_prismaUser) {
        return next()
      })
  }
}
