const { Schema } = require('mongoose')


module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },   
    image: {
        type: String
    }
    
})