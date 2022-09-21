import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriend/AddFriendButton";
import MainPageButton from "./MainPageButton";
import Logout from "./Logout/Logout";

const MainContainer = styled("div")({
	position: "absolute",
	right: "0",
	top: "0",
	height: "48px",
	borderBottom: "1px solid #2F3136",
	backgroundColor: "#36393F",
	width: "calc(100% - 326px)",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "0 15px",
	overflow: "hidden",
});

const BtnContainer = styled("div")({
	width: "auto",
	height: "24.5px",
	display: "flex",
	alignItems: "center",
	borderRight: "1.5px solid #40444B",
});

const FriendsContainer = styled("div")({
	width: "auto",
	height: "100%",
	display: "flex",
	alignItems: "center",
	overflow: "hidden",
});

const AppBar = () => {
	return (
		<MainContainer>
			<FriendsContainer>
				<BtnContainer>
					<MainPageButton />
				</BtnContainer>
				<AddFriendButton />
			</FriendsContainer>
			<Logout />
		</MainContainer>
	);
};

export default AppBar;
