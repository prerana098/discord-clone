import React from "react";
import { Button, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutButton = ({ handleOpenDialogue }) => {
	return (
		<Tooltip
			componentsProps={{
				tooltip: {
					sx: {
						color: "#D3D9D5",
						backgroundColor: "black",
						fontWeight: 550,
						fontSize: 12,
						padding: "8px",
					},
				},
				arrow: {
					sx: {
						color: "black",
					},
				},
			}}
			title='Logout'
			arrow
		>
			<Button
				disableRipple
				onClick={handleOpenDialogue}
				sx={{
					whiteSpace: "nowrap",
					minWidth: "30px",
					width: "30px",
					height: "30px",
					borderRadius: "50%",
					color: "#36393F",
					backgroundColor: "#B9BBBE",
					transition: "borderLeft 1",
					"&:hover": {
						color: "#36393F",
						backgroundColor: "#B9BBBE",
					},
				}}
			>
				<LogoutIcon style={{ width: "20px", height: "20px" }} />
			</Button>
		</Tooltip>
	);
};

export default LogoutButton;
