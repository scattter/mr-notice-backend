const UserService = require('../service/user.service')

const { userError, userRegisterError } = require('@types/errTypes/user.type')

class UserController {
  async registerUser(ctx, next) {
    const {user_name, password} = ctx.request.body

    try {
      const res = await UserService.createUser(user_name, password)
      ctx.body = {
        code: 10000,
        message: '用户注册成功',
        result: {
          id: res.id,
          user_name: res.user_name,
          token: res.token
        },
      }
    } catch (e) {
      ctx.app.emit('error', userRegisterError, ctx)
    }
    next()
  }

  async loginUser(ctx, next) {
    const { id, user_name, password } = ctx.app.status
    try {
      const token = await UserService.loginUser(password)
      ctx.body = {
        code: 10000,
        message: '用户登录成功',
        result: {
          id,
          user_name,
          token
        },
      }
    } catch (e) {
      ctx.app.emit('error', userError, ctx)
    }
    next()
  }
}

module.exports = new UserController()