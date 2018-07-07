const passport = require('passport')

//auth google
exports.googleLogin = (passport.authenticate('google', {
        scope: ['profile']
}))

exports.googleRedir =[ passport.authenticate('google'), (req, res) => {
    res.send(req.user)
}]