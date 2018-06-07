const mongoose = require('mongoose');
const { Artist } = require('./schemas');

module.exports = mongoose.model('Artist', Artist)