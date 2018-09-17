const Sequelize = require('sequelize')
const db = require('../db')

const PastWorks = db.define('pastWorks', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = PastWorks
