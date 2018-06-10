const mongoose = require('mongoose');
const { Schema, Schema: {ObjectId} } = mongoose;

module.exports = new Schema({
    nombre: { type: String, required: true},
    email: { type: String, required: true, match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},
    username:{ type: String, required: true},
    contraseña: { type: String, required: true},
    confirmaContraseña: { type: String, required: true},
    categoria: { type: String, required: true},    
    descripcion: { type: String, required: true},
    events: [{ type: ObjectId, ref: 'Event'}]
})

