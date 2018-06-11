const { Schema } = require('mongoose')


module.exports = new Schema({
    name: {
        title: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: Number
    },   
    image: {
        type: String
    },
    artist : {
        type: Schema.ObjectId, ref: 'Artist'
    }
    
})