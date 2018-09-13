const Sequelize = require('sequelize')
const db = require('../db')

const Projects = db.define('projects', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING,
    unique: true
  },
  media: {
    type: Sequelize.STRING,
    unique: false,
  },
  description : {
    type: Sequelize.STRING,
    allowNull: false,
  },
  source: {
    type: Sequelize.STRING,
  }
})

module.exports = Projects

