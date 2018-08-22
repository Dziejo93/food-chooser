const express = require('express')
const router = express.Router()
const passport = require('passport')
const UserController = require('../../controllers/UserController')
const PassportController = require('../../controllers/PassportController')

///auth routes
router.route('/login')
    .get(PassportController.login)
    .post(...PassportController.localLogin)


router.route('/register')
    .get(PassportController.register)
    .post(PassportController.localSignUp)


router.route('/google')
    .get(passport.authenticate('google', {
        scope: ['profile']
    }), PassportController.googleLogin)


router.route('/google/redirect')
    .get(...PassportController.googleRedir)


router.route('/logout')
    .get(PassportController.logout)


//user routes

router.route('/users')
    .get(UserController.getUsers)
    .post(UserController.postUser)
    .delete(UserController.deleteUsers)


router.route('/users/:id')
    .get(UserController.getUser)
    .post(UserController.postUser)
    .put(UserController.putUser)
    .delete(UserController.deleteUser)


router.rout

module.exports = router;