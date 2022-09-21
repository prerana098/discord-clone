import React from "react";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/alertActions";

const AlertNotification = ({
	showAlertMessage,
	alertMessageContent,
	closeAlertMessage,
}) => {
	return (
		<Snackbar
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			open={showAlertMessage}
			onClose={closeAlertMessage}
			autoHideDuration = {6000}
		>
			<Alert severity='info'>{alertMessageContent}</Alert>
		</Snackbar>
	);
};

const mapStateToProps = ({ alert }) => {
	return { ...alert };
};

const mapDispatchToProps = (dispatch) => {
	return { ...getActions(dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertNotification);
