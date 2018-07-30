const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy;
const {
    ExtractJwt
} = require('passport-jwt');
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
//TODO:change promises to async

// JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.JWT_SECRET
}, async (payload, done) => {
    try {
        // Find the user specified in token
        const user = await User.findById(payload.sub);

        // If user doesn't exists, handle it
        if (!user) {
            return done(null, false);
        }

        // Otherwise, return the user
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}));



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

//local stategies
passport.use('local-signup', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function (req, username, password, done) {
        User.findOne({
            'local.username': username
        }).then((user) => {
            if (user) {
                //make response 403
                console.log('user exists');
                done(null, user)
            } else {
                new User({
                    'local.username': username,
                    'local.password': password,
                }).save().then((newUser) => {
                    console.log('new user created' + newUser);
                    done(null, newUser)
                })
            }
        })
    }))





passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
}, function (req, username, password, done) {
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