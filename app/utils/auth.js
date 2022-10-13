// 引入模块依赖
const fs = require('fs');
const jwt = require('jsonwebtoken')
const path = require('path');

//撒盐，加密时候混淆
// const secret = '113Scatterjsdalkfnxcvmas'

//生成token
//info也就是payload是需要存入token的信息
function createToken(data) {
  const cert = fs.readFileSync(path.join(__dirname, '../../../rsa_private_key.pem'))
  const created = Date.now()
  // data里面是jwt的payload信息
  return jwt.sign(
    {
      id: data,
      exp: created + 60 * 60 * 10 * 1000 //Token有效时间 单位s 10小时
    },
    cert,
    {
      algorithm: 'RS256'
    }
  )
}

//验证Token
function verifyToken(token) {
  const cert = fs.readFileSync(path.join(__dirname, '../../pem/rsa_public_key.pem'))
  return new Promise((resolve, reject) => {
    return jwt.verify(token, cert, { algorithms: ['RS256'] }, (error, result) => {
      if(error){
        reject(error)
      } else {
        const { exp = 0 } = result
        const current = Date.now();
        // 验证时效性 如果当前时间小于过期时间 那么通过 否则抛出错误
        if (current <= exp) {
          resolve(result)
        } else {
          reject(result)
        }
      }
    })
  })
}

module.exports = {
  createToken,
  verifyToken,
}

// 作者：Bmongo
// 链接：https://juejin.cn/post/6847902223242887181