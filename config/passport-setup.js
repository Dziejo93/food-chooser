const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/user-model')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})


//google strategy
passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, (accesToken, refreshToken, profile, done) => {
        // check if user exists in db
        User.findOne({
            authProviderID: profile.id
        }).then((currentUser) => {
            if (currentUser) {
                //exists
                console.log('user is', currentUser)
                done(null, currentUser)

            } else {
                new User({
                    username: profile.displayName,
                    password: null,
                    authProvider: 'google',
                    authProviderID: profile.id
                }).save().then((newUser) => {
                    console.log('new user created' + newUser);
                    done(null, newUser)
                })
            }
        })
    })
)

passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({
        authTypeID: username
    }).then((currentUser) => {
        if (currentUser) {
            if (currentUser.password != password) {

            } else {
                console.log('wrong password');

            }
        }
    })
}))


//facebook Strategy
passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: '/auth/facebook/redirect'
    }, (accesToken, refreshToken, profile, done) => {
        console.log(profile);
        return done(null, profile)

    }

))