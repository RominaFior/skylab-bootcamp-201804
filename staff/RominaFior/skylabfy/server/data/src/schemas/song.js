const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
    number: {
        type: String
    },
    name: {
        title: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    file: {
        type: String
    },  
           
    album : {
        type: Schema.ObjectId, ref: 'Album'
    }
    
})