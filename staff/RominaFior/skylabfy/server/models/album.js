const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let AlbumSchema = Schema({
    name: {
        title: String,
        
    },
    description: {
        type: String,
        
    },
    year: {
        type: Number
    },   
    image: {
        type: String
    },
    artist: {
        type: Shema.ObjectId,
        ref: "Artist"
    }
    
});

module.exports = mongoose.model('Album', AlbumSchema);
