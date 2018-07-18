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
        //TODO: change into service
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
        username: username
    }).then(function (currentUser) {
        if (currentUser) {
            //exists
            console.log('123');
            console.log(currentUser);

            bcrypt.compare(password, currentUser.password).then(function (res) {
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