const CodeMap = require('../http.type')

module.exports = {
  pipelineFormatterError: {
    code: CodeMap.BAD_REQUEST,
    message: '参数格式错误',
    result: '',
  },
  pipelineMissParamsError: {
    code: CodeMap.BAD_REQUEST,
    message: '缺少必填项',
    result: '',
  },
  pipelineAlreadyExited: {
    code: CodeMap.CONFLICT,
    message: '该流水线已创建(名称重复)',
    result: '',
  },
  pipelineCreateError: {
    code: CodeMap.SERVER_ERROR,
    message: '流水线创建失败',
    result: '',
  },
  pipelineQueryError: {
    code: CodeMap.SERVER_ERROR,
    message: '流水线查询失败',
    result: '',
  },
}
