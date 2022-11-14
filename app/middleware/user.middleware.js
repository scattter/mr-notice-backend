const UserService = require('@service/user.service')

const {
  userAlreadyExited,
  userError,
  userFormatterError,
  userNotExited,
  userPasswordError,
  userRegisterError,
} = require('@types/errTypes/user.type')

const validUserFormatter = async (ctx, next) => {
  const { name, password } = ctx.request.body || {}
  if (!name || !password) {
    ctx.app.emit('error', userFormatterError, ctx)
    return
  }
  await next()
}

const validUserHasExist = async (ctx, next) => {
  const { name } = ctx.request.body || {}
  try {
    const user = await UserService.getUserInfo({ name })
    if (user) {
      ctx.app.emit('error', userAlreadyExited, ctx)
      return
    }
  } catch (e) {
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }
  await next()
}

const validUserPassword = async (ctx, next) => {
  const { name, password } = ctx.request.body || {}
  try {
    const user = await UserService.getUserInfo({ name })
    if (!user) {
      ctx.app.emit('error', userNotExited, ctx)
      return
    }
    const { password: db_password } = user
    if (!db_password || db_password !== password) {
      ctx.app.emit('error', userPasswordError, ctx)
      return
    }
    if (db_password === password) {
      // 先赋值  然后传递给controller
      ctx.app.status = {
        id: user.id,
        name: user.name,
        password: db_password,
      }
    } else {
      // 未知错误
      ctx.app.emit('error', userError, ctx)
      return
    }
  } catch (e) {
    ctx.app.emit('error', userError, ctx)
    return
  }
  await next()
}

module.exports = {
  validUserHasExist,
  validUserFormatter,
  validUserPassword,
}
