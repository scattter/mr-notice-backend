const CryptoJS = require('crypto-js');

// 十六位十六进制数作为密钥
const SECRET_KEY = CryptoJS.enc.Utf8.parse('scatter-12345678')
// 十六位十六进制数作为密钥偏移量
const SECRET_IV = CryptoJS.enc.Utf8.parse('1234123412341234')

//加密方法
const Encrypt = (context) => {
  const encodeContent = CryptoJS.enc.Utf8.parse(context)
  const encrypted = CryptoJS.AES.encrypt(encodeContent, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encrypted.ciphertext.toString().toUpperCase()
}

// 解密方法
const Decrypt = (context) => {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(context)
  const encodeContent = CryptoJS.enc.Base64.stringify(encryptedHexStr)
  const decrypt = CryptoJS.AES.decrypt(encodeContent, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
  return decryptedStr.toString()
}

module.exports = {
  Encrypt,
  Decrypt
}