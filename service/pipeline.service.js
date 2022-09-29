const Pipeline = require('../model/pipeline.model')

class PipelineService {
  async createPipeline(pipelineName, admin, relateRepo, relateBranch) {
    try {
      const res = await Pipeline.create({pipelineName, admin, relateRepo, relateBranch})
      return {
        ...res.dataValues,
      }
    } catch (e) {
      console.log('an error occur', e)
    }
  }

  async findPipelineInfo(pipelineName) {
    try {
      const pipeline = await Pipeline.findOne({
        attributes: ['pipelineName'],
        where: {
          pipelineName
        }
      })
      return pipeline ? pipeline.dataValues : null
    } catch (e) {
      console.log('an error occur', e)
    }
  }

  async queryAllPipelineInfo() {
    try {
      const pipelines = await Pipeline.findAll()
      if (pipelines && Array.isArray(pipelines)) {
        return pipelines.map(pipeline => pipeline.dataValues)
      }
    } catch (e) {
      console.log('an error occur', e)
    }
  }
}

module.exports = new PipelineService()