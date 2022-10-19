const Router = require('koa-router')
const fs = require('fs')

const router = new Router()
fs.readdirSync(__dirname).forEach(file => {
  if (file !== 'index.js') {
    // cjs可以设置动态路径名引入
    let r = require('./' + file)
    router.use(r.routes())
  }
})

module.exports = router
