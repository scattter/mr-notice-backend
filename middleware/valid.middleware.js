const passUrl = ['/api/v1/users/login', '/api/v1/users/register']
const {
  tokenFormatterError,
  tokenExpiredError,
} = require('@types/errTypes/valid.type')
const { verifyToken } = require('../utils/auth')

const validMiddleware = async (ctx, next) => {
  const url = ctx.request.url
  if (url && !passUrl.includes(url)) {
    const token = ctx.headers.authorization
    if (!token) {
      ctx.app.emit('error', tokenFormatterError, ctx)
      return
    }
    try {
      await verifyToken(token)
    } catch (e) {
      ctx.app.emit('error', tokenExpiredError, ctx)
      return
    }
  }
  await next()
}

module.exports = {
  validMiddleware
}