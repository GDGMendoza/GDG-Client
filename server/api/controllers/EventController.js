/**
 * EventController
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
     *    `/event/addSession`
     */
    addSession: function (req, res) {
        Session.findOne({_id: req.param('sessionId')}, function (sessionErr, sessionResponse) {
            delete sessionResponse.createdAt;
            delete sessionResponse.updatedAt;

            if (sessionResponse && !sessionErr) {
                Event.findOne({_id: req.param('eventId')}, function (eventErr, eventResponse) {
                    if (eventResponse && !eventErr) {
                        if (!eventResponse.sessions) eventResponse.sessions = {};
                        eventResponse.sessions[req.param('sessionId')] = sessionResponse;

                        eventResponse.save(function (eventSaveErr) {
                            if (!eventSaveErr) res.json({status: '200', response: 'Session agregada correctamente'});
                            else res.json({status: '500', error: 'Problemas al agregar session'});
                        });

                    } else res.json({status: '500', error: 'Problemas al encontrar evento'});

                });
            } else res.json({status: '500', error: 'Problemas al encontrar la session.'});
        });
    },


    /**
     * Action blueprints:
     *    `/event/removeSession`
     */
    removeSession: function (req, res) {
        Event.findOne({_id: req.param('eventId')}, function (eventErr, eventResponse) {
            delete eventResponse.sessions[req.param('sessionId')];

            if (eventResponse && !eventErr) {
                eventResponse.save(function (eventSaveErr) {
                    if (!eventSaveErr) res.json({status: '200', response: 'Session agregada correctamente'});
                    else res.send({status: '500', error: 'Problemas al agregar session'});
                });

            } else res.send({status: '500', error: 'Problemas al encontrar evento'});

        });
        /*Event.update({_id: req.param('eventId')}, {$pull: {'sessions.$': req.param('sessionId')}}, function (err) {

         });*/
    },
    //hay que reconvertir el id o identificarlo por otra cosa si usamos el native
    /*
     Event.native(function(err, collection){
     collection.find({}, function(err, data){
     console.log("LALAL " + data);
     });
     collection.db.collection('event').update({_id: req.param('eventId')}, {$push: {sessions: response}}, function (err) {
     if (err) {
     res.send({error: 'Problemas al agregar la session.'})
     } else {
     res.send({response: 'Session agregada correctamente.'})
     }
     });
     });
     */

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to EventController)
     */
    _config: {}


};
