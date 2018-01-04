var mongoose = require('mongoose');
Schema = mongoose.Schema;

var AirplaneSchema = new Schema({
	make: String,
	model: String,
	jet: Boolean,
	fuel: String
});

var Airplane = mongoose.model('Airplane', AirplaneSchema);

module.exports = Airplane;