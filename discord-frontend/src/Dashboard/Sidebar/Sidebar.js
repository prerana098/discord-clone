import React from "react";
import { styled } from "@mui/system";
import MainPageButton from "./MainPageButton";
import VideoCallButton from "./VideoCall/VideoCallButton";

const MainContainer = styled("div")({
	width: "72px",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	backgroundColor: "#202225",
});

const ButtonContainer = styled("div")({
	width: "31px",
	height: "auto",
	display: "flex",
	flexDirection: "column",
    alignItems: "center",
    padding: '0 0 8px 0',
	borderBottom: "3px solid #373A3F",
});

const Sidebar = () => {
	return (
		<MainContainer>
			<ButtonContainer>
				<MainPageButton />
			</ButtonContainer>
			<VideoCallButton/>
		</MainContainer>
	);
};

export default Sidebar;
