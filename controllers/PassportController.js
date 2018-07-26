const User = require('../models/user-model')
const passport = require('passport')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken');

signToken=user=>{
return JWT.sign({
    iss: 'food-chooser',
    sub: user.id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
}, process.env.JWT_SECRET);
}

module.exports = {
    login: async (req, res,next) => {
        res.render('login')
    },

    //auth logout
    logout: async(req, res,next) => {
        req.logout()
        res.redirect('/')
    },

    register: async(req, res) => {
        res.render('register')
    },

    //////////////////////Local strategies///////////////////////////////

    localSignUp: [passport.authenticate('local-signup', {
        failureRedirect: '/auth/register'
    }), async (req, res) => {
        res.redirect('login')
    }],

    localLogin: [passport.authenticate('local-login', {
        failureRedirect: '/auth/login'
    }), async (req, res) => {
        const token = signToken(req.user)
        res.status(200).json({token})
    }],


    ////////////////////////Google strategies////////////////////////////
    googleLogin: (passport.authenticate('google', {
        scope: ['profile']
    })),

    googleRedir: [passport.authenticate('google'), (req, res) => {
        res.redirect('/profile')
    }]
}