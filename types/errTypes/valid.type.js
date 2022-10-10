const CodeMap = require('../http.type')

module.exports = {
  tokenFormatterError: {
    code: CodeMap.FORBIDDEN,
    message: 'token为空',
    result: ''
  },
  tokenExpiredError: {
    code: CodeMap.FORBIDDEN,
    message: 'token无效',
    result: ''
  },
}