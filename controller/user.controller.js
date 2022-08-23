const UserService = require('../service/user.service')

const { userRegisterError } = require('../types/errTypes/user.type')

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
}

module.exports = new UserController()