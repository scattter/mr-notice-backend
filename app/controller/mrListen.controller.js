const MrListenService = require('@service/mrListen.service')

const {
  mrListenCreateError,
  mrListenQueryError,
} = require('@types/errTypes/mrListen.type')

class MrListenController {
  async createMrListen(ctx, next) {
    const { name, owner, address, projectId, branch } = ctx.request.body

    try {
      const res = await MrListenService.createMrListen(
        name,
        owner,
        address,
        projectId,
        branch
      )
      ctx.body = {
        code: 10000,
        message: '监听创建成功',
        result: res,
      }
    } catch (e) {
      ctx.app.emit('error', mrListenCreateError, ctx)
      return
    }
    next()
  }

  async getAllMrListenInfo(ctx, next) {
    try {
      const mrListens = await MrListenService.queryAllMrListenInfo()
      ctx.body = {
        code: 10000,
        message: 'MR监听查询成功',
        result: mrListens,
      }
    } catch (e) {
      ctx.app.emit('error', mrListenQueryError, ctx)
      return
    }
    next()
  }
}

module.exports = new MrListenController()
