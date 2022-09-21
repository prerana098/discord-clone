import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";

const DUMMY_FRIENDS = [
	{
		_id: 1,
		username: "Harry Styles",
		isOnline: true,
	},
	{
		_id: 2,
		username: "Taylor Swift",
		isOnline: false,
	},
	{
		_id: 3,
		username: "Ed Sheeren",
		isOnline: false,
	},

	{
		_id: 4,
		username: "Shawn Mendes",
		isOnline: true,
	},
];

const FriendsContainer = styled("div")({
	flexGrow: 0.8,
	width: "100%",
	display: "inline-block",
	justifyContent: "center",
	//border: "1px solid red",
});

const BorderStyling = styled("div")({
	height: "0%",
	width: "70%",
	borderBottom: "1px solid #25272A",
	justifySelf: "center",

	//border: "1px solid red",
});

const FriendsList = () => {
	return (
		<>
			<FriendsContainer>
				{DUMMY_FRIENDS.map((friend) => {
					const { _id, username, isOnline } = friend;
					return (
						<FriendsListItem
							key={_id}
							id={_id}
							username={username}
							isOnline={isOnline}
						/>
					);
				})}
			</FriendsContainer>
			<BorderStyling />
		</>
	);
};

export default FriendsList;
