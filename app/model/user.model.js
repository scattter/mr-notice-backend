const { DataTypes } = require('sequelize')

const mysql = require('../../db/seq')

const User = mysql.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_name: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    unique: true,
    comment: '用户名, 唯一且不为空, 最长64个字符'
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    unique: false,
    comment: ''
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    defaultValue: 'normal',
    comment: '用户角色'
  }
}, {
  // 如果为 true 则表的名称和 model 相同，即 user
  // 为 false MySQL创建的表名称会是复数 users
  // 如果指定的表名称本就是复数形式则不变
  freezeTableName: true
})

module.exports = User