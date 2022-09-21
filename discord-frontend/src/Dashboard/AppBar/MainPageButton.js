import { Button, Typography } from "@mui/material";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";

const MainPageButton = () => {
	return (
		<Button
			disableRipple
			sx={{
				"&:hover": {
					backgroundColor: "inherit",
				},
				width: "auto",
				height: "48px",
				padding: "0 15.5px 0 0 ",
				minWidth: 0,
				overflow:'hidden',
				
			}}
		>
			<PeopleIcon style={{ color: "#8E9297", padding: "10px" }} />
			<Typography
				sx={{
					color: "#F7FFFF",
					textAlign: "center",
					fontFamily: "Open Sans, sans-serif",
					fontWeight: 610,
					fontSize: "16.5px",
					letterSpacing: "0.1px",
					textTransform: "none",
				}}
			>
				Friends
			</Typography>
		</Button>
	);
};

export default MainPageButton;
