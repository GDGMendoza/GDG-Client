/**
 * EventController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    addSession: function (req, res) {

        Session.findOne({_id: req.param('sessionId')}, function (sessionErr, sessionResponse) {
            delete sessionResponse.createdAt;
            delete sessionResponse.updatedAt;

            if (!sessionErr && sessionResponse) {
                Event.findOne({_id: req.param('eventId')}, function (eventErr, eventResponse) {
                    if (!eventErr && eventResponse) {
                        if(!eventResponse.sessions) eventResponse.sessions = {};
                        eventResponse.sessions[req.param('sessionId')] = sessionResponse;

                        eventResponse.save(function (eventSaveErr) {
                            if (!eventSaveErr) res.send({response: 'Session agregada correctamente'});
                            else res.send({error: 'Problemas al agregar session'});
                        });

                    } else res.send({error: 'Problemas al encontrar evento'});

                });
            } else res.send({error: 'Problemas al encontrar la session.'});
        });
    },
    removeSession: function (req, res) {
        Event.findOne({_id: req.param('eventId')}, function (eventErr, eventResponse) {
            if (!eventErr && eventResponse) {
                delete eventResponse.sessions[req.param('sessionId')];

                eventResponse.save(function (eventSaveErr) {
                    if (!eventSaveErr) res.send({response: 'Session agregada correctamente'});
                    else res.send({error: 'Problemas al agregar session'});
                });

            } else res.send({error: 'Problemas al encontrar evento'});

        });
        /*Event.update({_id: req.param('eventId')}, {$pull: {'sessions.$': req.param('sessionId')}}, function (err) {

        });*/
    }

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
};
