const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email: email.toLowerCase() });

		// check if email exist and password matches
		if (user && (await bcrypt.compare(password, user.password))) {
			//send new token
			const token = jwt.sign(
				{ userId: user._id, email },
				process.env.JWT_SECRET,
				{
					expiresIn: process.env.JWT_LIFETIME,
				}
			);

			return res.status(200).json({
				userDetails: {
					email: user.email,
					token,
					username: user.username,
				},
			});
		}
		//else

		return res.status(400).send("Invalid credentials.Please try again.");
	} catch (error) {
		console.log(error);
		return res.status(500).send("Something went wrong.Please try again.");
	}
};

module.exports = postLogin;
