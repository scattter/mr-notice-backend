const RepositoryService = require('@service/repository.service')

const {
  repositoryAlreadyExited,
  repositoryCreateError,
  repositoryFormatterError,
  repositoryMissParamsError,
} = require('@types/errTypes/repository.type')

const validRepositoryFormatter = async (ctx, next) => {
  const { name, owner, address, token } = ctx.request.body || {}
  if (!name || !owner || !address || !token) {
    ctx.app.emit('error', repositoryMissParamsError, ctx)
    return
  }
  if (
    typeof name !== 'string' ||
    typeof owner !== 'string' ||
    typeof address !== 'string' ||
    typeof token !== 'string'
  ) {
    ctx.app.emit('error', repositoryFormatterError, ctx)
    return
  }
  await next()
}

const validRepositoryHasExist = async (ctx, next) => {
  const { name } = ctx.request.body || {}
  try {
    const result = await RepositoryService.findRepositoryInfo(name)
    if (result) {
      ctx.app.emit('error', repositoryAlreadyExited)
      return
    }
  } catch (e) {
    ctx.app.emit('error', repositoryCreateError)
    return
  }
  await next()
}

module.exports = {
  validRepositoryFormatter,
  validRepositoryHasExist,
}
