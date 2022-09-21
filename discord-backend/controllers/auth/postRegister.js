const mongoose = require("mongoose");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		//check if user exists
		const userExists = await User.exists({ email: email.toLowerCase() });

		if (userExists) {
			return res.status(409).send("E-mail already in use");
		}
		//Encrypt password
		const encryptedPassword = await bcrypt.hash(password, 10);

		//create user document and save it in database
		const user = await User.create({
			username,
			email: email.toLowerCase(),
			password: encryptedPassword,
		});

		//create JWT token
		const token = jwt.sign(
			{ userId: user._id, email },
			process.env.JWT_SECRET,
			{
				expiresIn: process.env.JWT_LIFETIME,
			}
		);

		return res.status(201).json({
			userDetails: {
				email: user.email,
				token,
				username: user.username,
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(500).send("Error has occurred.Please try again");
	}
};

module.exports = postRegister;
