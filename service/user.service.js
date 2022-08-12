const User = require('../model/user.model')

class UserService {
  async createUser(user_name, password) {
    try {
      const res = await User.create({user_name, password})
      return res.dataValues
    } catch (e) {
      console.log('an error occur', e)
    }
  }

  async getUserInfo({id, user_name, password, role}) {
    const obj = {}
    id && Object.assign(obj, {id})
    user_name && Object.assign(obj, {user_name})
    password && Object.assign(obj, {password})
    role && Object.assign(obj, {role})

    try {
      const info = await User.findOne({
        attributes: ['id', 'user_name', 'password', 'role'],
        where: obj
      })
      return info ? info.dataValues : null
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new UserService()