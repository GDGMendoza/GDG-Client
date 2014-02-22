/**
 * Post.js
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
        author: { //tranquilamente podria ser el id del autor
            type: 'json',
            required: true

        },
        content: {
            type: 'text',
            required: true

        },
        cover: {
            type: 'string',
            required: true

        },
        tags: {
            type: 'array'

        }

	}

};
