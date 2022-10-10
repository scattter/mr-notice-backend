const { Sequelize } = require('sequelize')

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require('../config/config.default')

const mysql = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: 'mysql'
})

// 根据模型自动创建表
mysql.sync().then(() => {
  console.log('创建成功')
}).catch(e => {
  console.log('创建失败', e)
})
module.exports = mysql