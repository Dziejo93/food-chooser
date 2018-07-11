exports.home = (req, res) => {
    res.render('home')
    };

    //auth login
exports.login=(req, res) => {
    res.render('login')
}

//auth logout
exports.logout=(req,res)=>{
    req.logout()
    res.redirect('/')
}

exports.register=(req,res)=>{
    res.render('register')
}

