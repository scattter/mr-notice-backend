const MrListenService = require('@service/mrListen.service')
const {
  mrListenAlreadyExited,
  mrListenCreateError,
  mrListenFormatterError,
  mrListenMissParamsError,
} = require('@types/errTypes/mrListen.type')

const validMrListenFormatter = async (ctx, next) => {
  const { name, owner, address, projectId, branch } = ctx.request.body || {}
  if (!name || !owner || !address || !projectId) {
    ctx.app.emit('error', mrListenMissParamsError, ctx)
    return
  }
  if (
    typeof name !== 'string' ||
    typeof owner !== 'string' ||
    typeof address !== 'string' ||
    (typeof projectId !== 'string' && typeof projectId !== 'number') ||
    typeof branch !== 'string'
  ) {
    ctx.app.emit('error', mrListenFormatterError, ctx)
    return
  }
  await next()
}

const validMrListenHasExist = async (ctx, next) => {
  const { name } = ctx.request.body || {}
  try {
    const mrListen = await MrListenService.findMrListenInfo(name)
    if (mrListen) {
      ctx.app.emit('error', mrListenAlreadyExited, ctx)
      return
    }
  } catch (e) {
    ctx.app.emit('error', mrListenCreateError, ctx)
    return
  }
  await next()
}

module.exports = {
  validMrListenFormatter,
  validMrListenHasExist,
}
