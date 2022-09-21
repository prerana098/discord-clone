import { Button, Typography } from "@mui/material";
import React from "react";
import Avatar from "../../../shared/components/Avatar";
import OnlineIndicator from "../OnlineIndicator/OnlineIndicator";

const FriendsListItem = ({ key, id, username, isOnline }) => {
	return (
		<Button
			key={id}
			disableRipple
			sx={{
				width: "90%",
				height: "42px",
				marginLeft: "10px",
				padding: "23px 0",
				display: "flex",
				justifyContent: "flex-start",
				textTransform: "none",

				"&:hover": {
					backgroundColor: "#3C3F45",
					color: "#DCDDDE",
				},
				"&:active": {
					backgroundColor: "#3F4248",
					color: "white",
				},
			}}
		>
			<Avatar username={username} id={id} isOnline={isOnline} />
			<OnlineIndicator isOnline={isOnline} />
			<Typography
				align='left'
				style={{
					marginLeft: "9px",
					fontSize: "14px",
					fontWeight: 400,
					color: "#96989D",
					fontFamily: "arial, sans-serif",
					letterSpacing: "0.05em",
					
				}}
			>
				{username}
			</Typography>
		</Button>
	);
};

export default FriendsListItem;
