exports.authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect('/auth/login')
    } else {
        next()
    }
}


exports.logged = (req, res) => {
    res.render('profile', {
        user: req.user
    })
}