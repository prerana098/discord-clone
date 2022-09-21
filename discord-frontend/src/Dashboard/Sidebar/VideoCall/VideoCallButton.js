import React from "react";
import { Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";

const Button = styled("button")({
	display: "inline-block",
	whiteSpace: "nowrap",
	border: "none",
	margin: "7px 0",
	width: "48px",
	height: "48px",
	borderRadius: "50%",
	color: "#3BA55D",
	backgroundColor: "#36393F",
	justifyContent: "center",
	"&:hover": {
		transition: "all .35s",
		color: "white",
		backgroundColor: "#3BA55D",
		borderRadius: "16px",
	},
	"&:active": {
		transition: "all .25s",
		color: "white",
		backgroundColor: "#3BA55D",
		borderRadius: "16px",
	},
});

const VideoCallButton = () => {
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
					},
				},
			}}
			title='Create new room'
			placement='right'
			arrow
		>
			<Button>
				<AddIcon fontSize='medium' sx={{ marginTop: "10%" }} />
			</Button>
		</Tooltip>
	);
};

export default VideoCallButton;
