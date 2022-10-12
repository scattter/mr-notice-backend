const CodeMap = require('../http.type')

module.exports = {
  userFormatterError: {
    code: CodeMap.BAD_REQUEST,
    message: '用户名或者密码为空',
    result: ''
  },
  userAlreadyExited: {
    code: CodeMap.CONFLICT,
    message: '用户名已存在, 请更换用户名',
    result: ''
  },
  userRegisterError: {
    code: CodeMap.SERVER_ERROR,
    message: '用户注册失败',
    result: ''
  },
  userNotExited: {
    code: CodeMap.FORBIDDEN,
    message: '用户不存在, 请先注册',
    result: ''
  },
  userPasswordError: {
    code: CodeMap.FORBIDDEN,
    message: '用户名或密码错误',
    result: ''
  },
  userError: {
    code: CodeMap.SERVER_ERROR,
    message: '用户模块错误, 请重试',
    result: ''
  }
}