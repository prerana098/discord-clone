import React from "react";
import { Typography } from "@mui/material";

const FriendsTitle = ({ title }) => {
	return (
		<Typography
			sx={{
				color: "#8E9297",
				fontFamily: "Open Sans, sans-serif",
				fontWeight: 610,
				fontSize: "12px",
				letterSpacing: "0.1px",
                textTransform: "uppercase",
				marginTop: '10px',
				marginBottom: '10px',
				
			}}
		>
			{title}
		</Typography>
	);
};

export default FriendsTitle;
