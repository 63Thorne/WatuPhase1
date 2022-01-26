function authUser(req, res, next) {
    if (req.user == null) {
        res.status(403)
        return res.render('paypal');
    }

    
}

module.exports = {
     authUser
}