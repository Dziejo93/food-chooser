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
            'google.id': profile.id
        }).then((currentUser) => {
            if (currentUser) {
                //exists
                console.log('user is', currentUser)
                done(null, currentUser)

            } else {
                console.log(profile);

                new User({
                    'google.id': profile.id,
                    'google.token': profile.token,
                    'google.name': profile.displayName
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
        'local.username': username
    }).then(function (currentUser) {
        if (currentUser) {
            //exists
            //TODO: change into user-model
            bcrypt.compare(password, currentUser.local.password).then(function (res) {
                if (res) {
                    console.log('user is' + currentUser);
                    done(null, currentUser)
                } else {
                    console.log('wrong password');
                    done(null, false)
                }
            })

        } else if (!currentUser) {
            console.log('user not exists');
            done(null)

        }
    })
}))