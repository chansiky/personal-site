const router = require('express').Router()
const {Projects} = require('../db/models')

router.get('/list', async (req,res,next) => {
  try{
    const projects = await Projects.findAll({
      raw: true,
      attributes: ['id','title', 'url']
    })
    res.json(projects)
  }catch (err) {
    next(err)
  }
})

router.get('/all', async (req,res,next) => {
  try{
    const projects = await Projects.findAll({
      raw: true,
    })
    res.json(projects)
  }catch (err) {
    next(err)
  }
})

module.exports = router
