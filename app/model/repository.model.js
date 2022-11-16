const { DataTypes } = require('sequelize')

const mysql = require('../../db/seq')

const Repository = mysql.define(
  'repository',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.CHAR(128),
      allowNull: false,
      unique: true,
      comment: '仓库名, 唯一且不为空, 最长128个字符',
    },
    token: {
      type: DataTypes.CHAR(128),
      allowNull: false,
      unique: true,
      comment: '仓库token, 唯一且不为空, 最长128个字符',
    },
    address: {
      type: DataTypes.CHAR(128),
      allowNull: false,
      unique: true,
      comment: '仓库地址, 唯一且不为空, 最长128个字符',
    },
    owner: {
      type: DataTypes.CHAR(128),
      allowNull: false,
      unique: true,
      comment: '仓库创建人, 唯一且不为空, 最长128个字符',
    },
  },
  {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true,
  }
)

module.exports = Repository
