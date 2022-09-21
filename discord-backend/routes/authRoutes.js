const express = require("express");
const router = express.Router();
const tokenValidation = require("../middlewares/tokenValidation");

const {
	postRegister,
	postLogin,
} = require("../controllers/auth/authControllers");

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const registerSchema = Joi.object({
	username: Joi.string().min(3).max(12),
	email: Joi.string().email(),
	password: Joi.string().min(6).max(12),
});

const loginSchema = Joi.object({
	email: Joi.string().email(),
	password: Joi.string().min(6).max(12),
});

router.post("/register", validator.body(registerSchema), postRegister);
router.post("/login", validator.body(loginSchema), postLogin);

// Test route to verify if jwt validation middleware is working
router.get("/test", tokenValidation, (req, res) => {
	res.send("Request passed.");
});

module.exports = router;
