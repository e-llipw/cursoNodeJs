module.exports = {
    Admin: (req, res, next) => {
        if(req.isAuthenticated() && req.user.Admin == 1){
            return next()
        }
        req.flash('error_msg', 'Você não tem permissão para entrar nessa página!')
        res.redirect('/')
    }
}