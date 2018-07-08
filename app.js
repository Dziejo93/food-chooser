const express = require('express')
const session = require('express-session')
const path = require('path')
const bodyParser = require('body-parser')
const flash = require('connect-flash')

const routes = require('./routes/index');
const authRoutes = require('./routes/auth-routes')
const profileRoutes=require('./routes/profile-routes')
const keys = require('./config/keys')

const passportSetup = require('./config/passport-setup')
const passport = require('passport')

const mongoose = require('mongoose')
const cookieSession = require('cookie-session')


//init express
const app = express()
//set views engine and folder + statics
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/public',express.static(path.join(__dirname, 'public')))

//cookie uptime for 1 day
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}))

//init passport
app.use(passport.initialize())
app.use(passport.session())


//connect mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('conneted to db');

})

//routes
app.use('/', routes)
app.use('/auth', authRoutes)
app.use('/profile',profileRoutes)

app.use((req, res, next) => {
    res.status(404).render('404')
})

module.exports = app