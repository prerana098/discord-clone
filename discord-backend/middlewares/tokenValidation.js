const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
	console.log(req.body);
	let token = req.body.token || req.query.token || req.headers["authorization"];

	if (!token) {
		return res.status(403).send("A token is required for authentication");
	}

	try {
		token = token.replace(/^Bearer\s+/, "");
		const decoded = jwt.verify(token, config.JWT_SECRET);
		req.user = decoded;
	} catch (error) {
		return res.status(401).send("Invalid token");
	}

	return next();
};

module.exports = verifyToken;
