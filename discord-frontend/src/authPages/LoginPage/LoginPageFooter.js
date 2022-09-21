import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const formNotValidMsg = () => {
	return (
		<p
			style={{
				color: "white",
				textTransform: "none",
				fontSize: "13px",
				lineHeight: "1.6",
			}}
		>
			* Enter the correct e-mail address and password <br />* Password should
			contain 6 to 12 characters
		</p>
	);
};

const formValidMsg = () => {
	return "Click to log in!";
};

function LoginPageFooter({ handleLogin, isFormValid }) {
	const navigate = useNavigate();

	const handlePushToRegisterPage = () => {
		navigate("/register");
	};

	return (
		<>
			<Tooltip title={isFormValid ? formValidMsg() : formNotValidMsg()}>
				<div>
					<CustomPrimaryButton
						label='Log In'
						disabled={!isFormValid}
						additionalStyles={
							isFormValid
								? { marginTop: "30px" }
								: {
										marginTop: "30px",
										backgroundColor: "#5865F2",
										color: "white",
								  }
						}
						onClick={handleLogin}
					/>
				</div>
			</Tooltip>

			<RedirectInfo
				text='Need an account? '
				redirectText='Register'
				additionalStyles={{ marginTop: "10px" }}
				redirectHandler={handlePushToRegisterPage}
			/>
		</>
	);
}

export default LoginPageFooter;
