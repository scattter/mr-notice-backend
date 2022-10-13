const Router = require('koa-router')

const router = new Router({prefix: '/api/v1/users'})
const { loginUser, registerUser } = require('@controller/user.controller')
const {
  validUserFormatter,
  validUserHasExist,
  validUserPassword
} = require('@middleware/user.middleware')

router.post('/register', validUserFormatter, validUserHasExist, registerUser)

router.post('/login', validUserFormatter, validUserPassword, loginUser)

module.exports = router