const CodeMap = require('../http.type')

module.exports = {
  mrListenFormatterError: {
    code: CodeMap.BAD_REQUEST,
    message: '参数格式错误',
    result: '',
  },
  mrListenMissParamsError: {
    code: CodeMap.BAD_REQUEST,
    message: '缺少必填项',
    result: '',
  },
  mrListenAlreadyExited: {
    code: CodeMap.CONFLICT,
    message: '监听已创建(名称重复)',
    result: '',
  },
  mrListenCreateError: {
    code: CodeMap.SERVER_ERROR,
    message: 'MR监听创建失败',
    result: '',
  },
  mrListenQueryError: {
    code: CodeMap.SERVER_ERROR,
    message: 'MR监听查询失败',
    result: '',
  },
}
