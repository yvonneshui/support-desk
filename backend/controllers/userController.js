const asyncHandler = require('express-async-handler')
const bcrypt = require ('bcryptjs')

const User =  require('../models/userModel')
const { rmSync } = require('fs')


//@desc Register a new user
//@route /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
	const {name, email, password} = req.body

	//validating data
	if(!name || !email || !password){
		res.status(400)
		throw new Error('Please include all fields')
	}

	//check if user already exists
	const userExists = await User.findOne({email})

	if (userExists){
		res.status(400)
		throw new Error('User already exists')
	}

	//Hash password 
	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	//Create User
	const user = await User.create({
		name,
		email,
		password:hashedPassword
	})

	//send it as a json
	if(user){
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email
		})
	} else {
		res.status(400)
		throw new error('Invalid user data')
	}
})

//@desc Register a new user
//@route /api/users/login
//@access Public
const loginUser = asyncHandler( async (req, res) => {
	res.send('Login Route')
})

module.exports = {
	registerUser,
	loginUser
}