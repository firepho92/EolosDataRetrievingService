const { createRegister } = require('../services/')

const retrieveController = (Id, register) => {
	try {
		let json = JSON.parse(register)
		json = {
			station: Id,
      date: Date.now(),
      temperature: Math.round((json.temperature + Number.EPSILON) * 100) / 100,
      humidity: Math.round((json.humidity + Number.EPSILON) * 100) / 100,
      pressure: Math.round((json.pressure + Number.EPSILON) * 100) / 100,
      windSpeed: Math.round((json.windSpeed + Number.EPSILON) * 100) / 100,
      windDirection: json.windDirection,
      location: {
        latitude: json.latitude,
        longitude: json.longitude,
        altitude: json.altitude
      }
    }
    createRegister(json)
	} catch(error) {
		throw error
	}
}

module.exports = {
	retrieveController
}