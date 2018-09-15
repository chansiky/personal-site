const Sequelize = require('sequelize')
const db = require('../db')

const Posts = db.define('posts', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    unique: true
  },
  media: {
    type: Sequelize.STRING,
    unique: false
  },
  date: {
    type: Sequelize.STRING,
    unique: false
  }
})

module.exports = Posts
