require('module-alias/register')
const Koa = require('koa')
const KoaBody = require("koa-body");
const parameter = require('koa-parameter')
const router = require('./routers/index')
const { validMiddleware } = require('@middleware/valid.middleware')
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
app.use(validMiddleware)
app.use(router.routes()).use(router.allowedMethods())
app.on('error', errHandler)


module.exports = app