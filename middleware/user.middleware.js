const User = require('../model/user.model')
const UserService = require('../service/user.service')

const {
  userFormatterError,
  userAlreadyExited
} = require('../types/errTypes/user.type')

const validRegisterFormatter = async (ctx, next) => {
  const {user_name, password} = ctx.request.body || {}
  if (!user_name || !password) {
    ctx.app.emit('error', userFormatterError, ctx)
    return
  }
  await next()
}

const validUserHasExist = async (ctx, next) => {
  const {user_name} = ctx.request.body || {}
  try {
    const user = await UserService.getUserInfo({user_name})
    if (user) {
      ctx.app.emit('error', userAlreadyExited, ctx)
      return
    }
  } catch (e) {
    console.log(e)
  }
  await next()
}

module.exports = {
  validUserHasExist,
  validRegisterFormatter
}