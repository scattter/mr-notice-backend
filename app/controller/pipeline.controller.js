const PipelineService = require('@service/pipeline.service')

const {
  pipelineCreateError,
  pipelineQueryError,
} = require('@types/errTypes/pipeline.type')

class PipelineController {
  async createPipeline(ctx, next) {
    const { pipelineName, admin, relateRepo, relateBranch } = ctx.request.body

    try {
      const res = await PipelineService.createPipeline(
        pipelineName,
        admin,
        relateRepo,
        relateBranch
      )
      ctx.body = {
        code: 10000,
        message: '流水线创建成功',
        result: res,
      }
    } catch (e) {
      ctx.app.emit('error', pipelineCreateError, ctx)
      return
    }
    next()
  }

  async getAllPipelineInfo(ctx, next) {
    try {
      const pipelines = await PipelineService.queryAllPipelineInfo()
      ctx.body = {
        code: 10000,
        message: '流水线查询成功',
        result: pipelines,
      }
    } catch (e) {
      ctx.app.emit('error', pipelineQueryError, ctx)
      return
    }
    next()
  }
}

module.exports = new PipelineController()
