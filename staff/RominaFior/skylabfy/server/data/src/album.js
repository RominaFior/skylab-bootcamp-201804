const mongoose = require('mongoose')
const { Album } = require('./schemas')

module.exports = mongoose.model('Album', Album)