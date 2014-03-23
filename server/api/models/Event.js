/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        date: {
            type: 'date',
            required: true
        },
        tags: {
            type: 'array',
            required: true
        },
        gmap: {
            type: 'json',
            required: true
        },
        flag: {
            type: 'boolean',
            required: true,
            defaultsTo: false
        },
        gplus_eventid: {
            type: 'string',
            required: true
        },
        sessions: {
            type: 'json'
        }

	}

};
