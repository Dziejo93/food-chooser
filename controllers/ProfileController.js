exports.logged=(req,res)=>{
    res.send('logged as ' +req.user.username)
}
