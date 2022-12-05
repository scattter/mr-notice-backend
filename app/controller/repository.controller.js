const RepositoryService = require('@service/repository.service')
const { missParamsError } = require('@types/errTypes/common.type')
const {
  projectQueryError,
  repositoryCreateError,
  repositoryQueryError,
} = require('@types/errTypes/repository.type')

class RepositoryController {
  async createRepository(ctx, next) {
    const { name, address, owner, token } = ctx.request.body || {}
    try {
      const result = await RepositoryService.createRepository(
        name,
        address,
        owner,
        token
      )
      ctx.body = {
        code: 10000,
        message: '仓库创建成功',
        result: result,
      }
    } catch (e) {
      ctx.app.emit('error', repositoryCreateError, ctx)
      return
    }
    next()
  }

  async queryAllRepository(ctx, next) {
    try {
      const repositories = await RepositoryService.queryAllRepository()
      ctx.body = {
        code: 10000,
        message: '仓库查询成功',
        result: repositories,
      }
    } catch (e) {
      ctx.app.emit('error', repositoryQueryError, ctx)
      return
    }
    next()
  }

  async queryAllProject(ctx, next) {
    const { name } = ctx.request.query
    if (!name) {
      ctx.app.emit('error', missParamsError, ctx)
      return
    }
    try {
      const projects = await RepositoryService.queryAllProject(name)
      ctx.body = {
        code: 10000,
        message: '项目查询成功',
        result: projects,
      }
    } catch (e) {
      ctx.app.emit('error', projectQueryError, ctx)
      return
    }
    next()
  }
}

module.exports = new RepositoryController()
