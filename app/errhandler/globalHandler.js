const CodeMap = require('@types/http.type')

module.exports = (err, ctx) => {
  let status = 500
  switch (err.code) {
    case CodeMap.BAD_REQUEST:
      status = 400
      break
    case CodeMap.FORBIDDEN:
      status = 403
      break
    case CodeMap.NOT_FOUND:
      status = 404
      break
    case CodeMap.CONFLICT:
      status = 409
      break
    case CodeMap.SERVER_ERROR:
      status = 500
      break
  }
  ctx.status = status
  ctx.body = err
}