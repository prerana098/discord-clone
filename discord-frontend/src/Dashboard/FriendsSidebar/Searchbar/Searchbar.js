import React from "react";
import { styled } from "@mui/system";

const Button = styled("button")({
	width: "92%",
  height: "57%",
  textAlign: 'start',
	backgroundColor: "#202225",
	color: "#A1A5A7",
	fontSize: "13px",
	fontWeight: 500,
	letterSpacing: "0.005em",
	textTransform: "none",
	padding: '0 0 0 7px',
	boxShadow: "none",
	border: "none",
	borderRadius: "4px",
	cursor: "pointer",
	
});

const Searchbar = () => {
	return (
		<>
			<Button> Find or start a conversation</Button>
		</>
	);
};

export default Searchbar;
