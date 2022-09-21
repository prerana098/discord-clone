import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageFooter from "./RegisterPageFooter";
import RegisterPageInputs from "./RegisterPageInputs";
import { validateRegisterForm } from "../../shared/utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({ register }) => {
	const navigate = useNavigate();
	const [mail, setMail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		setIsFormValid(validateRegisterForm({ mail, username, password }));
	}, [mail, username, password, setIsFormValid]);

	const handleRegister = () => {
		const userDetails = {
			email: mail,
			password,
			username,
		};
		register(userDetails, navigate);
	};

	return (
		<AuthBox>
			<Typography
				variant='h5'
				sx={{ color: "white", textAlign: "center", fontWeight: 800 }}
			>
				Create an account
			</Typography>
			<RegisterPageInputs
				mail={mail}
				setMail={setMail}
				username={username}
				setUsername={setUsername}
				password={password}
				setPassword={setPassword}
			/>
			<RegisterPageFooter
				isFormValid={isFormValid}
				handleRegister={handleRegister}
			/>
		</AuthBox>
	);
};

const mapActionsToProps = (dispatch) => {
	return {
		...getActions(dispatch),
	};
};

export default connect(null, mapActionsToProps)(RegisterPage);
