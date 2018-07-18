const User = require('../models/user-model')
const passport = require('passport')

//auth login
exports.login = (req, res) => {
    res.render('login')
}

//auth logout
exports.logout = (req, res) => {
    req.logout()
    res.redirect('/')
}

exports.register = (req, res) => {
    res.render('register')
}


//auth local
exports.localSignUp = (req, res) => {
    //TODO: change into service, hash password
    console.log(req.body.username);
    User.findOne({
        username: req.body.username
    }).then((user) => {
        if (user) {
            console.log('user exists');
            res.render('register')
        } else {
            new User({
                username: req.body.username,
                password: req.body.password,
                authProvider: 'local',
                authProviderID: null
            }).save().then((newUser) => {
                console.log('new user created' + newUser);
                res.redirect('/profile')
            })
        }
    })
}


exports.localLogin = [passport.authenticate('local', {
        failureRedirect: '/auth/login'
    }),
    (req, res) => {
        res.redirect('/profile')
    }
]

//auth google
exports.googleLogin = (passport.authenticate('google', {
    scope: ['profile']
}))

exports.googleRedir = [passport.authenticate('google'), (req, res) => {
    res.redirect('/profile')
}]


//auth facebook
exports.facebookLogin = (passport.authenticate('facebook'))

exports.facebookRedir = [passport.authenticate('facebook'), (req, res) => {
    res.redirect('/profile')
}]