const express = require('express')
const router = express.Router()
const passport = require('passport')
const PagesController = require('../controllers/PagesController')
const PassportController = require('../controllers/PassportController')


router.route('/login')
    .get(PassportController.login)
    .post(...PassportController.localLogin)


router.route('/register')
    .get(PassportController.register)
    .post(PassportController.localSignUp)


router.route('/google')
    .get(PassportController.googleLogin)


// router.route('/google/redirect')
//     .get(...PassportController.googleRedir)


router.route('/logout')
    .get(PassportController.logout)

    
module.exports = router;