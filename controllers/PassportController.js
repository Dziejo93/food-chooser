const User = require('../models/user-model')
const passport = require('passport')
const bcrypt = require('bcrypt')
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

//////////////////////Local strategies///////////////////////////////

exports.localSignUp = [passport.authenticate('local-signup', {
    failureRedirect: '/auth/register'
}), (req, res) => {
    res.redirect('login')
}]

exports.localLogin = [passport.authenticate('local-login', {
    failureRedirect: '/auth/login'
}), (req, res) => {
    res.redirect('/profile')
}]


////////////////////////Google strategies////////////////////////////
exports.googleLogin = (passport.authenticate('google', {
    scope: ['profile']
}))

exports.googleRedir = [passport.authenticate('google'), (req, res) => {
    res.redirect('/profile')
}]