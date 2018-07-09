const passport = require('passport')

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