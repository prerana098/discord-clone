import React from "react";
import { styled } from "@mui/system";
import ItemInvitationList from "./ItemInvitationList";
import Scrollbars from "react-custom-scrollbars-2";

const DUMMY_INVITATIONS = [
	{
		_id: 1,
		senderId: {
			username: "Ateez",
			mail: "ateez@gmail.com",
		},
	},
	{
		_id: 2,
		senderId: {
			username: "Stray Kidz",
			mail: "skz@gmail.com",
		},
	},
	{
		_id: 3,
		senderId: {
			username: "Black Pink",
			mail: "bp@gmail.com",
		},
	},

	{
		_id: 4,
		senderId: {
			username: "BTS",
			mail: "bts@gmail.com",
		},
	},
];

const MainContainer = styled("div")({
	height: "86px",
	width: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	overflow: "auto",
});

const PendingInvitationsList = () => {
	return (
		<MainContainer>
			<Scrollbars autoHide>
				{DUMMY_INVITATIONS.map((invitation) => {
					const { _id, senderId } = invitation;
					return (
						<ItemInvitationList
							key={_id}
							id={_id}
							username={senderId.username}
							mail={senderId.mail}
						/>
					);
				})}
			</Scrollbars>
		</MainContainer>
	);
};

export default PendingInvitationsList;
