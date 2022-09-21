import { Box } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";
import AcceptRejectButtons from "./AcceptRejectButtons";

const ItemInvitationList = ({
	id,
	username,
	mail,
	acceptInvitation,
	rejectInvitation,
}) => {
	const [disabled, setDisabled] = useState(false);

	const handleAccept = () => {
		acceptInvitation({ id });
		setDisabled(true);
	};

	const handleReject = () => {
		rejectInvitation({ id });
		setDisabled(true);
	};

	return (
		<div style={{ width: "99.4%" }}>
			<Box
				sx={{
					width: "99.4%",
					height: "42px",
					marginTop: "10px",
					paddingBottom: "30px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					//borderBottom: "1px solid #242628",
				}}
			>
				<Avatar username={username} />
				<Typography
					align='left'
					sx={{
						marginLeft: "9px",
						fontSize: "14px",
						fontWeight: 400,
						color: "#96989D",
						fontFamily: "arial, sans-serif",
						letterSpacing: "0.05em",
						flexGrow: 1,
					}}
				>
					{username}

					<Typography
						align='left'
						sx={{
							fontSize: "11px",
							fontWeight: 400,
							color: "#96989D",
							paddingRight: '3px',
							fontFamily: "arial, sans-serif",
							letterSpacing: "0.05em",
						}}
					>
						{mail}
					</Typography>
					
				</Typography>
				<AcceptRejectButtons
						disabled={disabled}
						acceptHandler={handleAccept}
						rejectHandler={handleReject}
					/>
			</Box>
		</div>
	);
};

export default ItemInvitationList;
