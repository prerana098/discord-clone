import React, { useState } from "react";
import { styled } from "@mui/system";
import AddFriendDialogue from "./AddFriendDialogue";

const Button = styled("button")({
	whiteSpace: "nowrap",

	overflow: "hidden",
	margin: "10px 20px",
	height: "53%",
	minWidth: "95px",
	width: "95px",
	backgroundColor: "#2D7D46",
	color: "#FFFEFD",
	fontSize: "15px",
	fontWeight: 520,
	letterSpacing: "0.01em",
	textTransform: "none",
	padding: 0,
	boxShadow: "none",
	border: "none",
	borderRadius: "4px",
	cursor: "pointer",
	"&:active": {
		transform: "translateY(0.5px)",
	},
});

const AddFriendButton = () => {
	const [isDialogueOpen, setIsDialogueOpen] = useState(false);

	const handleOpenDialogue = () => {
		setIsDialogueOpen(true);
	};

	const handleCloseDialogue = () => {
		setIsDialogueOpen(false);
	};
	return (
		<>
			<Button type='button' onClick={handleOpenDialogue}>
				Add Friend
			</Button>
			<AddFriendDialogue
				isDialogueOpen={isDialogueOpen}
				closeDialogueHandler={handleCloseDialogue}
			/>
		</>
	);
};

export default AddFriendButton;
