const User = require('../models/user-model')
const passport = require('passport')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken');

signToken = user => {
    return JWT.sign({
        iss: 'food-chooser',
        sub: user.id,
        iat: new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
    }, process.env.JWT_SECRET);
}

module.exports = {

    ////////////////////Local strategies///////////////////////////////


    localSignUp: [(req, res, next) => {
        passport.authenticate('local-signup', (err, user, info) => {
            if (err) {
                res.status(422).send({
                    message: info.message
                })
            }
            if (!user) {
                res.status(401).send({
                    message: info.message
                })
            } else {
                res.status(200).send({
                    message: 'user created'
                })
            }

        })(req, res, next)
    }],

    localLogin: [(req, res, next) => {
        passport.authenticate('local-login', async (err, user, info) => {
            if (err) {
                res.status(422).send({
                    message: info.message
                })
            }
            if (!user) {
                res.status(401).send({
                    message: info.message
                })
            } else {
                const token = await signToken(user)
                res.status(200).send({
                    user: user,
                    token: token
                })
            }

        })(req, res, next)
    }],



    ////////////////////////Google strategies////////////////////////////
    googleLogin: async (req, res, next) => {},

    googleRedir: [passport.authenticate('google'), (req, res) => {
        const token = signToken(req.user)
        res.status(200).json({
            token
        })
    }]
}