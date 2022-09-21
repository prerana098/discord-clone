import React, { useState, useEffect } from "react";
import { validateMail } from "../../../shared/utils/validators";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography,
} from "@mui/material";
import InputWithLabel from "../../../shared/components/InputWithLabel";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";

const AddFriendDialogue = ({
	isDialogueOpen,
	closeDialogueHandler,
	sendFriendInvitation = () => {},
}) => {
	const [mail, setMail] = useState("");
	const [isFormValid, setIsFormValid] = useState("");

	//send invitation on click
	const handleSendInvitation = () => {
		// send friend request to server
	};

	//onClose function
	const handleCloseDialogue = () => {
		closeDialogueHandler();
		setMail("");
	};

	useEffect(() => {
		setIsFormValid(validateMail(mail));
	}, [mail, setIsFormValid]);

	return (
		<div>
			<Dialog
				open={isDialogueOpen}
				onClose={handleCloseDialogue}
				sx={{
					backgroundColor: "rgba(5, 5, 6,0.6)",
					zIndex: 1,
				}}
				PaperProps={{
					style: { backgroundColor: "#2F3136", justifyContent: "center" },
				}}
			>
				<DialogTitle sx={{ textAlign: "center" }}>
					<Typography
						sx={{
							fontWeight: 800,
							fontSize: "23px",
							color: "#FEFCF9",
							fontFamily: "Open Sans, sans-serif",
						}}
					>
						Invite a friend
					</Typography>
				</DialogTitle>
				<DialogContent sx={{ paddingBottom: "13px" }}>
					<DialogContentText>
						<Typography sx={{ color: "#86898E" }}>
							Enter the email address of the friend whom you would like to
							invite
						</Typography>
					</DialogContentText>
					<InputWithLabel
						label='email'
						type='email'
						value={mail}
						setValue={setMail}
						placeholder='Enter an email address'
					/>
				</DialogContent>
				<DialogActions sx={{ justifyContent: "center" }}>
					<CustomPrimaryButton
						label='Send friend request'
						onClick={handleSendInvitation}
						disabled={!isFormValid}
						additionalStyles={{
							width: "auto",
							marginBottom: "9px",
						}}
					/>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default AddFriendDialogue;
