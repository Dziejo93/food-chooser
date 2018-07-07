const router = require('express').Router()
const passport = require('passport')
const ProfileController = require('../controllers/ProfileController')


router.get('/',ProfileController.authCheck,ProfileController.logged)

module.exports = router;