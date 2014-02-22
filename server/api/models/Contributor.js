/**
 * Contributor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
        email: {
            type: 'string',
            required: true
        },
        name: {
            type: 'string',
            required: true
        },
        job_position: {
            type: 'string'
        },
        company: {
            type: 'string'
        },
        google_plus: {
            type: 'string',
            required: true
        },
        facebook: {
            type: 'string'
        },
        twitter: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        photo: {
            type: 'string',
            required: true
        }
	}

};
