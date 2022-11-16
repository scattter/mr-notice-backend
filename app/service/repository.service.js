const RepositoryModule = require('@model/repository.model')

class RepositoryService {
  async createRepository(name, owner, address, token) {
    try {
      const result = await RepositoryModule.create({
        name,
        owner,
        address,
        token,
      })
      return result.dataValues
    } catch (e) {
      return Promise.reject(e)
    }
  }

  async findRepositoryInfo(name) {
    try {
      const repo = await RepositoryModule.findOne({
        attributes: ['name'],
        where: {
          name,
        },
      })
      return repo ? repo.dataValues : null
    } catch (e) {
      return Promise.reject(e)
    }
  }

  async queryAllRepository() {
    try {
      const repositories = await RepositoryModule.findAll()
      if (repositories && Array.isArray(repositories)) {
        return repositories.map(repository => {
          const temp = { ...repository.dataValues }
          delete temp.token
          return temp
        })
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

module.exports = new RepositoryService()
