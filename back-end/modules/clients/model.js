var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, default: '' }
});		

module.exports = mongoose.model('Client', schema);