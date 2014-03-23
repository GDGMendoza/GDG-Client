/**
 * Session.js
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
        overview: {
            type: 'string',
            required: true
        },
        startTime: {
            type: 'string'
        },
        endTime: {
            type: 'string'
        },
        contributors: {
            type: 'array'
        }
	}

};
