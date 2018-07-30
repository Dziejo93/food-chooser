const router = require('express').Router()
const passport = require('passport')
const passportJWT = passport.authenticate('jwt', { session: false });
const ProfileController = require('../controllers/ProfileController')

router.get('/',passportJWT,ProfileController.logged)

module.exports = router;