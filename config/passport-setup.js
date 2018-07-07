const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const keyes = require('./keys.js')
const User = require('../models/user-model')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keyes.google.clientID,
        clientSecret: keyes.google.clientSecret
    }, (accesToken, refreshToken, profile, done) => {
        // check if user exists in db
        User.findOne({
            authTypeID: profile.id
        }).then((currentUser) => {
            if (currentUser) {
                //exists
                console.log('user is', currentUser);
                done(null, currentUser)

            } else {
                new User({
                    username: profile.displayName,
                    authType: 'google',
                    authTypeID: profile.id
                }).save().then((newUser) => {
                    console.log('new user created' + newUser);
                    done(null, newUser)
                })
            }
        })
    })
)