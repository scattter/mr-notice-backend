const CodeMap = require('../http.type')

module.exports = {
  formatterError: {
    code: CodeMap.BAD_REQUEST,
    message: '参数格式错误',
    result: '',
  },
  missParamsError: {
    code: CodeMap.BAD_REQUEST,
    message: '缺少必填项',
    result: '',
  },
  createError: {
    code: CodeMap.SERVER_ERROR,
    message: '仓库创建失败',
    result: '',
  },
  queryError: {
    code: CodeMap.SERVER_ERROR,
    message: '查询失败',
    result: '',
  },
}
