const express = require('express')
const router = express.Router()
const passport = require('passport')
const UserController = require('../../controllers/UserController.js')


router.route('/users')
    .get(UserController.getUsers)
    .post(UserController.postUser)
    .delete(UserController.deleteUsers)


router.route('/users/:id')
    .get(UserController.getUser)
    .post(UserController.postUser)
    .put(UserController.putUser)
    .delete(UserController.deleteUser)


module.exports = router;