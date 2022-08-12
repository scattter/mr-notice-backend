const Router = require('koa-router')

const router = new Router({prefix: '/api/v1/users'})
const { registerUser } = require('../controller/user.controller')
const {
  validRegisterFormatter,
  validUserHasExist
} = require('../middleware/user.middleware')

router.post('/register', validRegisterFormatter, validUserHasExist, registerUser)

module.exports = router