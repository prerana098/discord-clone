import { Button,Tooltip } from "@mui/material";
import React from "react";
import { SiDiscord } from "react-icons/si";

const MainPageButton = () => {
	return (
		<Tooltip
			componentsProps={{
				tooltip: {
					sx: {
						color: "#D3D9D5",
						backgroundColor: "black",
						fontWeight: 550,
						fontSize: 15,
						padding: "8px",
					},
				},
				arrow: {
					sx: {
						color: "black",
						minWidth: 0,
						minHeight:0,
						width: '1px',
						height: '1px'
					},
				},
			}}
			title='Direct Messages'
			placement='right'
			arrow
		>
			<Button
				disableRipple
				sx={{
					width: "48px",
					height: "48px",
					borderRadius: "16px",
					margin: 0,
					padding: 0,
					minWidth: 0,
					marginTop: "10px",
					color: "white",
					backgroundColor: "#5865F2",
					"&:hover": {
						backgroundColor: "#5865F2",
					},
					"&:active": {
						backgroundColor: "#5865F2",
						transform: "translateY(1.5px)",
					},
				}}
			>
				<SiDiscord style={{ width: "26.3px", height: "26.3px" }} />
			</Button>
		</Tooltip>
	);
};

export default MainPageButton;
