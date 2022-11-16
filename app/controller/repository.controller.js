const RepositoryService = require('@service/repository.service')
const {
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
      ctx.app.emit('error', repositoryCreateError)
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
      ctx.app.emit('error', repositoryQueryError)
    }
    next()
  }
}

module.exports = new RepositoryController()
