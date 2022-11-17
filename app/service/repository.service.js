const RepositoryModule = require('@model/repository.model')
const { queryAllPrivateProject } = require('@app/api/repository.api')

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
        attributes: ['name', 'token', 'address'],
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

  async queryAllProject(name) {
    try {
      const repository = await this.findRepositoryInfo(name)
      const { address, token } = repository
      const projects = await queryAllPrivateProject(
        address,
        {
          simple: true,
        },
        {
          headers: {
            'PRIVATE-TOKEN': token,
          },
        }
      )
      return projects.map(project => {
        return {
          id: project.id,
          name: project.name,
          web_url: project.web_url,
        }
      })
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

module.exports = new RepositoryService()
