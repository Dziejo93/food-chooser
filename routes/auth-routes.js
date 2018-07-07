const express = require('express')
const router = express.Router()
const passport = require('passport')
const PagesController = require('../controllers/PagesController')
const OAuthController = require('../controllers/OAuthControllers')



router.get('/login', PagesController.login)
router.get('/logout', PagesController.logout)

router.get('/google', OAuthController.googleLogin)
router.get('/google/redirect', ...OAuthController.googleRedir)
module.exports = router;