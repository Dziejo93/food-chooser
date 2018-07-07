const router = require('express').Router()
const passport = require('passport')
const ProfileController = require('../controllers/ProfileController')


router.get('/',ProfileController.logged)

module.exports = router;