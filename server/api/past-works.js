const router = require('express').router()
const { PastWorks } = require('../db/models')

router.use('/list', async (req,res,next) =>{
  try{
    const pastWorks = await PastWorks.findAll({
      raw: true,
      attributes: {[
        'id',
        'title',
        'url'
      ]}
    })
    res.json(pastWorks)
  }catch(e){
    next(e)
  }
})

module.exports = router
