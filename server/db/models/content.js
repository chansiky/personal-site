const Sequelize = require('sequelize')
const db = require('../db')

const Content = db.define('content', {
  title: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: false,
  },
  media: {
    type: Sequelize.STRING,
    unique: false,
  },
  description : {
    type: Sequelize.STRING,
    allowNull: false,
  },
  link: {
    type: Sequelize.STRING,
  },
  source: {
    type: Sequelize.STRING,
  }
})

module.exports = Content

