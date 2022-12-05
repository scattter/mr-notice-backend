const MrListenModule = require('@model/mrListen.model')

class MrListenService {
  async createMrListen(
    name,
    owner,
    repository,
    projectId,
    branch,
    noticeType,
    noticeAddress
  ) {
    try {
      const res = await MrListenModule.create({
        name,
        owner,
        repository,
        projectId,
        branch,
        noticeAddress,
        noticeType,
      })
      return {
        ...res.dataValues,
      }
    } catch (e) {
      console.log('an error occur', e)
    }
  }

  async findMrListenInfo(name) {
    try {
      const mergeRequest = await MrListenModule.findOne({
        attributes: ['name'],
        where: {
          name,
        },
      })
      return mergeRequest ? mergeRequest.dataValues : null
    } catch (e) {
      console.log('an error occur', e)
    }
  }

  async queryAllMrListenInfo() {
    try {
      const mergeRequests = await MrListenModule.findAll()
      if (mergeRequests && Array.isArray(mergeRequests)) {
        return mergeRequests.map(mergeRequest => mergeRequest.dataValues)
      }
    } catch (e) {
      console.log('an error occur', e)
    }
  }
}

module.exports = new MrListenService()
