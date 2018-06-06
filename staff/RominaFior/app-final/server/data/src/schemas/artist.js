const mongoose = require('mongoose');
const { Schema, Schema: {ObjectId} } = mongoose;

module.exports = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},
    password:{ type: String, required: true},
    description: { type: String, required: true},
    genre: { type: String, required: true},
    bankAccount: { type: String},    
    votes: { type: Number},
    image: { type: String},
    events: [{ type: ObjectId, ref: 'Event'}]
})