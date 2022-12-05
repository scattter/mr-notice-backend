const { get } = require('@app/api/request')
const https = require('https')
const COMMON_GITLAB_URL = '/api/v4'

const queryAllPrivateProject = (repoAddress, params, config) => {
  return get(
    `${repoAddress}${COMMON_GITLAB_URL}/projects?visibility=private`,
    params,
    {
      ...config,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    }
  )
    .then(res => {
      return res.data
    })
    .catch(e => {
      return Promise.reject(e)
    })
}

module.exports = {
  queryAllPrivateProject,
}
