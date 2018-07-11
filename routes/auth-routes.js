const express = require('express')
const router = express.Router()
const passport = require('passport')
const PagesController = require('../controllers/PagesController')
const PassportController = require('../controllers/PassportController')



router.get('/login', PagesController.login)
router.get('/logout', PagesController.logout)
router.get('/register',PagesController.register)

router.post('/register',PassportController.localRegister)

router.get('/google', PassportController.googleLogin)
router.get('/google/redirect', ...PassportController.googleRedir)

router.get('/facebook',PassportController.facebookLogin)
router.get('/facebook/redirect',...PassportController.facebookRedir)

module.exports = router;