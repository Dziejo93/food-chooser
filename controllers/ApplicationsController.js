exports.store = (req, res) => {
res.json({
    'name':req.body.name,
    'phone':req.body.phone,
    'message': req.body.message
})
}