const mongoose = require('mongoose')
const registerSchema = require('../models/Register')
const RegisterModel = mongoose.model('Register')

const createRegister = async (register) => {
	try {
		const newRegister = RegisterModel(register)
		const result = await newRegister.save()
		console.log(result)
	} catch(error) {
		throw error
	}
}

module.exports = {
	createRegister
}