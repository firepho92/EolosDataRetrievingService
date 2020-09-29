const mongoose = require('mongoose')
const { dbData } = require('./config')
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const { retrieveController } = require('./controllers/')
const Id = mongoose.Types.ObjectId()

const main = async () => {
	const connection = await mongooseConnect()
	try{
		const usbPort = new SerialPort('/dev/ttyACM0', { baudRate: 115200 })
		const parser = new Readline()
	  usbPort.pipe(parser)
	  parser.on('data', data => {
	  	retrieveController(Id, data)
	  })
	} catch(error) {
		console.log(error)
	}
	/*try {
		const usbPort = new SerialPort('/dev/ttyACM0', { baudRate: 115200 })
		const parser = new Readline()
	  usbPort.pipe(parser)
	  parser.on('data', (data) => {
	  	console.log(data)
	  	/*let json = JSON.parse(data)
	    json = {
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
	  })
	  setInterval(() => {
	  	usbPort.write('hola \n')
	  }, 5000)
	} catch(error) {
		console.log(error)
	}*/
}

const mongooseConnect = async () => {
	try {
		const connection = await mongoose.connect(dbData().url, { useNewUrlParser: true, useUnifiedTopology: true })
		return true
	} catch(error) {
		console.log(error)
		return false
	}
}

main()