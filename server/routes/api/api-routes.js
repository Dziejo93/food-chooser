const express = require('express')
const router = express.Router()
const passport = require('passport')


router.route('/Users')
    .get()
    .post()


router.route('/User/:userId')
    .get()
    .post()
    .put()
    .delete()


module.exports = router;