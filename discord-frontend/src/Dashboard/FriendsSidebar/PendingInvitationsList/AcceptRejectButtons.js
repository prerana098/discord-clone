import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { Box, IconButton } from "@mui/material";

const AcceptRejectButtons = ({ disabled, acceptHandler, rejectHandler }) => {
	return (
		<Box sx={{ display: "flex" }}>
			<IconButton
				disableRipple
				disabled={disabled}
				onClick={acceptHandler}
				sx={{
					color: "white",
					"&:hover": {
						backgroundColor: "#3BA55D",
						transition: "all 0.2s ",
						transform: "translateY(-1.5px)",
					},
				}}
			>
				<CheckIcon />
			</IconButton>
			<IconButton
				disableRipple
				disabled={disabled}
				onClick={rejectHandler}
				sx={{
					color: "white",
					"&:hover": {
						backgroundColor: "#D83C3E",
						transition: "all 0.2s",
						transform: "translateY(-1.5px)",
					},
				}}
			>
				<ClearIcon />
			</IconButton>
		</Box>
	);
};

export default AcceptRejectButtons;
