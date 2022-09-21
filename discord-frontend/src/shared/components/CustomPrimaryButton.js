import React from "react";
import { Button } from "@mui/material";

const CustomPrimaryButton = ({
	label,
	additionalStyles,
	disabled,
	onClick,
}) => {
	return (
		<Button
			variant='contained'
			sx={{
				backgroundColor: "#5865F2",
				color: "white",
				textTransform: "none",
				fontSize: "16px",
				fontWeight: 500,
				width: "100%",
				height: "40px",
				"&:hover": {
					backgroundColor: "#4752C4",
				},
				"&:active": {
					backgroundColor: "#3C45A5",
				},
				"&:disabled": {
					color: "#878992",
					backgroundColor: "#3C438C",
					cursor: "pointer",
				},
			}}
			style={additionalStyles ? additionalStyles : {}}
			disabled={disabled}
			onClick={onClick}
			disableRipple
		>
			{label}
		</Button>
	);
};

export default CustomPrimaryButton;
