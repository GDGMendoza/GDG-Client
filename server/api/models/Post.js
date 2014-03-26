/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    //podemos forzar el esquema de tal forma que no se puedan agregar atributos adicionales a los nombrados en los modelos

    attributes: {
        title: {
            type: 'string',
            required: true
        },
        author_email: { //tranquilamente podria ser el id del autor || usamos email para que no este el id disponible del lado cliente
            type: 'string',
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
