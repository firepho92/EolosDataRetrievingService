const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Register = new Schema({
	station: { type: Schema.Types.ObjectId },
	date: { type: Date, default: Date.now },
	temperature: { type: Number },
	humidity: { type: Number },
	pressure: { type: Number },
	windSpeed:  { type: Number },
	windDirection: { type: String },
	rain: { type: Number, default: 0 },
	location: {
		latitude:  { type: Number },
		longitude: { type: Number },
		altitude: { type: Number }
	}
})

module.exports = mongoose.model('Register', Register)