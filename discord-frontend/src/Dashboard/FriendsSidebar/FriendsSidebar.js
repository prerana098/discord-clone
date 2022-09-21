import React from "react";
import { styled } from "@mui/system";
import FriendsTitle from "./FriendsTitle";
import FriendsList from "./FriendsList/FriendsList";
import PendingInvitationsList from "./PendingInvitationsList/PendingInvitationsList";
import Searchbar from "./Searchbar/Searchbar";


const MainContainer = styled("div")({
	width: "224px",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	backgroundColor: "#2F3136",
});

const TopBar = styled("div")({
	boxSizing: "borderBox",
	height: "48px",
	borderBottom: "1px solid #242628",
	width: "99%",
	padding: "10 0 0px 0px",
	display: 'flex',
	flexDirection: 'column',
	alignItems: "center",
	justifyContent:'center',

	//border: '1px solid red'
});

const FriendsSidebar = () => {
	return (
		<MainContainer>
			<TopBar>
			<Searchbar/>
			</TopBar>
			<FriendsTitle title='Direct Messages' />
			<FriendsList/>
			<FriendsTitle title='Invitations' />
			<PendingInvitationsList/>
		</MainContainer>
	);
};

export default FriendsSidebar;
