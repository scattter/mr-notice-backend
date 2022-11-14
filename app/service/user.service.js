const User = require('@model/user.model')
const { createToken } = require('../utils/auth')

class UserService {
  async createUser(name, password) {
    try {
      const res = await User.create({ name, password })
      // 生成token并返回 这里的密码还没有进行解码 直接用来生成token了
      const token = createToken(password)
      return {
        ...res.dataValues,
        token,
      }
    } catch (e) {
      console.log('an error occur', e)
    }
  }

  async getUserInfo({ id, name, password, role }) {
    const obj = {}
    id && Object.assign(obj, { id })
    name && Object.assign(obj, { name })
    password && Object.assign(obj, { password })
    role && Object.assign(obj, { role })

    try {
      const info = await User.findOne({
        attributes: ['id', 'name', 'password', 'role'],
        where: obj,
      })
      return info ? info.dataValues : null
    } catch (e) {
      console.log(e)
    }
  }

  async loginUser(password) {
    // 生成token
    return createToken(password)
  }
}

module.exports = new UserService()
