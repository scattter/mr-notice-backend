// 200 400 403 404 409 500
const codeMap = {
  SUCCESS: 10000,       // 200
  BAD_REQUEST: 10001,   // 400
  FORBIDDEN:10002,      // 403
  NOT_FOUND: 10003,     // 404
  CONFLICT: 10004,      // 409
  SERVER_ERROR: 10005,  // 500
}

module.exports = codeMap