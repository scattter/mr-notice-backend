const Koa = require('koa')
const path = require("path");
const KoaBody = require("koa-body");
const parameter = require('koa-parameter')
const router = require('./routers/index')
const errHandler = require('./errhandler/globalHandler')

const app = new Koa()
app.use(
  KoaBody({
    multipart: true,
    formidable: {
      keepExtensions: true,
    },
    parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
  })
)
app.use(parameter(app))
app.use(router.routes()).use(router.allowedMethods())
app.on('error', errHandler)


module.exports = app