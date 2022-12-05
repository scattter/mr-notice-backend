const { DataTypes } = require('sequelize')

const mysql = require('../../db/seq')

// 监听的MR
const MrListenModule = mysql.define(
  'merge_request_listen',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      unique: true,
      comment: '此监听的名称',
    },
    owner: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      unique: false,
      comment: '创建监听的创建人',
    },
    repository: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      comment: '监听仓库(gitlab的根url地址)',
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      comment: '监听项目id',
    },
    branch: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      defaultValue: 'master',
      comment: '监听分支',
    },
    noticeType: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      defaultValue: '',
      comment: '监听通知方式',
    },
    noticeAddress: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      defaultValue: '',
      comment: '监听通知地址',
    },
  },
  {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true,
  }
)

module.exports = MrListenModule
