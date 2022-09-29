const Router = require('koa-router')

const router = new Router({prefix: '/api/v1/pipeline'})
const { createPipeline, getAllPipelineInfo } = require('../controller/pipeline.controller')
const { validMiddleware } = require('../middleware/valid.middleware')
const {
  validPipelineFormatter,
  validPipelineHasExist
} = require('../middleware/pipeline.middleware')

router.post('/create', validMiddleware, validPipelineFormatter, validPipelineHasExist, createPipeline)

router.get('/list', validMiddleware, getAllPipelineInfo)

module.exports = router