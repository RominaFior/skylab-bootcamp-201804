const mongoose = require('mongoose')
const { Song } = require('./schemas')

module.exports = mongoose.model('Song', Song)