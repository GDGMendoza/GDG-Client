/**
 * AuthController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    login: function (req,res) {
        var error = {error: 'Usuario o clave incorrecta', auth: false}
        if(!req.param('email') || !req.param('password')){
            res.send(error);
        } else {
            var email = req.param('email');
            var password = req.param('password');
            Contributor.findOne({email: email, password: password}, function(err, response){
                if(response){
                    req.session.auth = true;
                    req.session.email = email;
                    res.send({auth: true})
                } else {
                    res.send(error)
                }
            });
        }
    },
    logout: function (req, res) {
        req.session.destroy(function(){
            res.send({auth: false})
        })
    }
};
