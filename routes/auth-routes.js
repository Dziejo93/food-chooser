const express = require('express')
const router = express.Router()
const passport = require('passport')
const PagesController = require('../controllers/PagesController')
const PassportController = require('../controllers/PassportController')



router.get('/login', PassportController.login)
router.post('/login',...PassportController.localLogin)

router.get('/logout', PassportController.logout)

router.get('/register',PassportController.register)
router.post('/register',PassportController.localSignUp)

router.get('/google', PassportController.googleLogin)
router.get('/google/redirect', ...PassportController.googleRedir)

router.get('/facebook',PassportController.facebookLogin)
router.get('/facebook/redirect',...PassportController.facebookRedir)

module.exports = router;