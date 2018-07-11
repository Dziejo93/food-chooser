const passport = require('passport')
//auth local
exports.localRegister = (req,res) => {
res.json({
    'username':req.body.username,
    'password':req.body.password
})
}




//auth google
exports.googleLogin = (passport.authenticate('google', {
    scope: ['profile']
}))

exports.googleRedir = [passport.authenticate('google'), (req, res) => {
    res.redirect('/profile')
}]


//auth facebook
exports.facebookLogin=(passport.authenticate('facebook'))

exports.facebookRedir=[passport.authenticate('facebook'),(req,res)=>{
    res.redirect('/profile')
}]