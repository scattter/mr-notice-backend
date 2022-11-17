const Router = require('koa-router')
const { validMiddleware } = require('@middleware/valid.middleware')
const {
  createRepository,
  queryAllProject,
  queryAllRepository,
} = require('@controller/repository.controller')
const {
  validRepositoryFormatter,
  validRepositoryHasExist,
} = require('@middleware/repository.middleware')

const router = new Router({ prefix: '/api/v1/repository' })

router.post(
  '/create',
  validMiddleware,
  validRepositoryFormatter,
  validRepositoryHasExist,
  createRepository
)

router.get('/list', validMiddleware, queryAllRepository)

router.get('/projects', validMiddleware, queryAllProject)

module.exports = router
