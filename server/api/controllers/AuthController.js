/**
 * AuthController
 *
 * @module      :: Controller
 * @description    :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {


    /**
     * Action blueprints:
     *    `/auth/login`
     */
    login: function (req, res) {
        var email = req.param('email');
        var password = req.param('password');
        var error = {auth: false, error: 'Usuario o clave incorrecta'};
        if (email && password) {
            Contributor.findOne({email: email, password: password}, function (err, response) {
                if (response && !err) {
                    req.session.auth = true;
                    req.session.email = email;
                    res.json({auth: true})
                } else res.json(error);
            });
        } else res.json(error);
    },


    /**
     * Action blueprints:
     *    `/auth/logout`
     */
    logout: function (req, res) {
        req.session.destroy(function(){
            res.json({auth: false});
        })
    },


    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to AuthController)
     */
    _config: {}


};
