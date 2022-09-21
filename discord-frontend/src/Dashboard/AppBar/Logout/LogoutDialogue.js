import React from "react";

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography,
} from "@mui/material";

import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton";
import { logout } from "../../../shared/utils/auth";

const LogoutDialogue = ({ isDialogueOpen, closeDialogueHandler }) => {
	
    //onClose function
	const handleCloseDialogue = () => {
		closeDialogueHandler();
	};

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
					style: {
						backgroundColor: "#36393F",
						justifyContent: "center",
						width: "430px",
					},
				}}
			>
				<DialogTitle sx={{ paddingBottom: "10px" }}>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: "21px",
							color: "#FEFCF9",
							fontFamily: "Open Sans, sans-serif",
						}}
					>
						Log Out
					</Typography>
				</DialogTitle>
				<DialogContent sx={{ paddingBottom: "55px" }}>
					<DialogContentText>
						<Typography
							sx={{ color: "#C5C6C8", fontSize: "15px", fontFamily: "arial" }}
						>
							Are you sure you want to log out?
						</Typography>
					</DialogContentText>
				</DialogContent>
				<DialogActions
					sx={{
						display: "flex",
						justifyContent: "flex-end",
					}}
					style={{
						paddingTop: "20px",
						backgroundColor: "#2F3136",
					}}
				>
					<Button
						variant='text'
						disableRipple
						onClick={handleCloseDialogue}
						sx={{
							color: "white",
							minWidth: 0,
							width: "90px",
							marginBottom: "9px",
							fontSize: "13px",
							fontWeight: 500,

							fontFamily: "arial",
							textTransform: "none",
							boxShadow: "none",
							"&:hover": {
								backgroundColor: "#2F3136",
								textDecoration: "underline white solid 1px",
								textUnderlineOffset: "3px",

								boxShadow: "none",
							},
						}}
					>
						Cancel
					</Button>
					<Button
						variant='contained'
						disableRipple
						onClick={logout}
						sx={{
							backgroundColor: "#D83C3E",
							color: "white",
							minWidth: 0,
							width: "90px",
							marginBottom: "9px",
							marginRight: "16px",
							fontSize: "13px",
							fontWeight: 500,
							fontFamily: "arial",
							textTransform: "none",
							boxShadow: "none",
							"&:hover": {
								backgroundColor: "#A12D2F",
								boxShadow: "none",
							},
							"&:active": {
								backgroundColor: "#8C2729",
							},
						}}
					>
						Log Out
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default LogoutDialogue;
