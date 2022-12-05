const axios = require('axios')

const service = axios.create({
  timeout: 5000,
})

service.interceptors.request.use(
  config => {
    // 产品集视图中必须是登录后访问，因此肯定存在token
    // const { userInfo } = appStore.useMainStore
    // if (!config.headers) config.headers = {}
    // Object.assign(config.headers, {
    //   common: {
    //     Authorization: userInfo.token,
    //   },
    // })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    // const { code } = response.data
    // if (code === 10000) {
    //   return response
    // }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

const get = (url, params, config) => {
  return service.get(url, {
    params,
    ...config,
  })
}

const post = (url, params, config) => {
  return service.post(url, params, config)
}

module.exports = {
  get,
  post,
}
