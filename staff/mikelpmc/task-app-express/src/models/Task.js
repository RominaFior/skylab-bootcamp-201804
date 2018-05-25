var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    text: String,
    id: String,
    done: Boolean
});
mongoose.model('Task', TaskSchema);

module.exports = mongoose.model('Task');
