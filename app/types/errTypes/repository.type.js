const CodeMap = require('../http.type')

module.exports = {
  repositoryFormatterError: {
    code: CodeMap.BAD_REQUEST,
    message: '参数格式错误',
    result: '',
  },
  repositoryMissParamsError: {
    code: CodeMap.BAD_REQUEST,
    message: '缺少必填项',
    result: '',
  },
  repositoryAlreadyExited: {
    code: CodeMap.CONFLICT,
    message: '仓库已创建(名称重复)',
    result: '',
  },
  repositoryCreateError: {
    code: CodeMap.SERVER_ERROR,
    message: '仓库创建失败',
    result: '',
  },
  repositoryQueryError: {
    code: CodeMap.SERVER_ERROR,
    message: '仓库查询失败',
    result: '',
  },
}
