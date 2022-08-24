module.exports = (err, ctx) => {
  let status = 500
  switch (err.code) {
    case '10001':
      status = 400
      break
    case '10002':
      status = 409
      break
    case '10003':
      status = 500
      break
    case '10004':
      status = 403
      break
    case '10005':
      status = 403
      break
  }
  ctx.status = status
  ctx.body = err
}