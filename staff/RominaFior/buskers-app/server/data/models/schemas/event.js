const mongoose = require('mongoose');
const { Schema, Schema: {ObjectId} } = mongoose;

module.exports = new Schema({
    name: { type: String, required: true},
    date: { type: Date, required: true},
    location: { type: String, required: true},    
    owner: { type: ObjectId, ref: 'User'}
})