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
			* Enter the correct e-mail address and password <br />
            * Username should contain 3 to 12 characters <br />
            * Password should contain 6 to 12 characters
		</p>
	);
};

const formValidMsg = () => {
	return "Click to register!";
};

function RegisterPageFooter({ handleRegister, isFormValid }) {
	const navigate = useNavigate();

	const handlePushToLoginPage = () => {
		navigate("/login");
	};

	return (
		<>
			<Tooltip title={isFormValid ? formValidMsg() : formNotValidMsg()}>
				<div>
					<CustomPrimaryButton
						label='Continue'
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
						onClick={handleRegister}
					/>
				</div>
			</Tooltip>

			<RedirectInfo
				redirectText='Already have an account?'
				additionalStyles={{ marginTop: "10px" }}
				redirectHandler={handlePushToLoginPage}
			/>
		</>
	);
}

export default RegisterPageFooter;
