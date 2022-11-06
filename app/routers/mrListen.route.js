const Router = require('koa-router')
const { validMiddleware } = require('@middleware/valid.middleware')
const {
  createMrListen,
  getAllMrListenInfo,
} = require('@controller/mrListen.controller')

const router = new Router({ prefix: '/api/v1/mr-listen' })
const {
  validMrListenFormatter,
  validMrListenHasExist,
} = require('@middleware/mrListen.middleware')

router.post(
  '/create',
  validMiddleware,
  validMrListenFormatter,
  validMrListenHasExist,
  createMrListen
)

router.get('/list', validMiddleware, getAllMrListenInfo)

module.exports = router
