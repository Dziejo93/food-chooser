const router = require('express').Router()
const passport = require('passport')
const passportJWT = passport.authenticate('jwt', {
    session: false
});
const UserController = require('../controllers/UserController')

// router.get('/', passportJWT, UserController.logged)

module.exports = router;