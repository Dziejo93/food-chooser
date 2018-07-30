const express = require('express')
const router = express.Router()
const passport = require('passport')


router.get('/',(req,res)=>{
    res.json({
       msg : 'hello'
    })
})



module.exports = router;