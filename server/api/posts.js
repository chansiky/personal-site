const router = require('express').Router()
const {Posts} = require('../db/models')

router.get('/list', async (req,res,next) => {
  try{
    const posts = await Posts.findAll({
      raw: true,
      attributes: [
        'id',
        'title',
        'url',
      ]
    })
    console.log('posts are' , posts)
    res.json(posts)
  }catch (err){
    next(err)
  }
})

module.exports = router
