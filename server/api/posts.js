const router = require('express').Router()
const {posts} = require('../db/models')

router.get('/list', async (req,res,next) => {
  try{
    const posts = await posts.findAll({
    })
    res.json(posts.data)
  }catch (err){
    next(err)
  }
})

module.exports = router
