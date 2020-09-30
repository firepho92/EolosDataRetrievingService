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