/**
 * Contributor
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        email: {
            type: 'string',
            required: true,
            uuid: true
        },
        password: {
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
        },
        toJSON: function () {
            var contributor = this.toObject();
            delete contributor.password;
            return contributor;
        }
    }

};
