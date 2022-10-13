const PipelineService = require('@service/pipeline.service')
const {
  pipelineAlreadyExited,
  pipelineCreateError,
  pipelineFormatterError,
  pipelineMissParamsError
} = require('@types/errTypes/pipeline.type');

const validPipelineFormatter = async (ctx, next) => {
  const {pipelineName, admin, relateRepo, relateBranch} = ctx.request.body || {}
  if (!pipelineName || !admin || !relateRepo || !relateBranch) {
    ctx.app.emit('error', pipelineMissParamsError, ctx)
    return
  }
  if (typeof pipelineName !== 'string' || typeof admin !== 'string' || typeof relateRepo !== 'string' || typeof relateBranch !== 'string') {
    ctx.app.emit('error', pipelineFormatterError, ctx)
    return
  }
  await next()
}

const validPipelineHasExist = async (ctx, next) => {
  const { pipelineName } = ctx.request.body || {}
  try {
    const pipeline = await PipelineService.findPipelineInfo(pipelineName)
    if (pipeline) {
      ctx.app.emit('error', pipelineAlreadyExited, ctx)
      return
    }
  } catch (e) {
    ctx.app.emit('error', pipelineCreateError, ctx)
    return
  }
  await next()
}

module.exports = {
  validPipelineFormatter,
  validPipelineHasExist
}