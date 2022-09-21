import React from "react";
import { Typography } from "@mui/material";

const LoginPageHeader = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<Typography variant='h5' sx={{ color: "white", fontWeight: 800 }}>
				Welcome back!
			</Typography>
			<Typography sx={{ color: "#b9bbbe" }}>
				We're so excited to see you again!
			</Typography>
		</div>
	);
};

export default LoginPageHeader;
