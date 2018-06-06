const mongoose = require('mongoose');
const { Event } = require('./schemas');

module.exports = mongoose.model('Event', Event)