const router = require('express').Router()
const {Projects} = require('../db/models')

router.get('/list', async (req,res,next) => {
  try{
    console.log(req)
    const projects = await Projects.findAll({
      attributes: ['title', 'url']
    })
    res.json(projects.data)
  }catch (err) {
    next(err)
  }
})

module.exports = router
