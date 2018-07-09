require('dotenv').config({path:'./config/.env'})
const express = require('express')
const expressSession = require('express-session')
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
    keys: [process.env.COOKIE_KEY]
}))

//init passport
app.use(passport.initialize())
app.use(passport.session())


//connect mongodb
mongoose.connect(process.env.DB_URI, () => {
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