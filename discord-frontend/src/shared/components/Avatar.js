import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import randomColor from "../utils/randomColor";

const AvatarPreview = styled("div")({
	whiteSpace: "nowrap",
	fontFamily: "arial",
	height: "35px",
	minWidth:'35px',
	width: "35px",
	color: "white",
	backgroundColor: "#E44235",
	borderRadius: "42px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "16px",
	fontWeight: "500",
	marginLeft: "5px",
});

const Avatar = ({ username, id }) => {
	const [color, setColor] = useState("orange");
	useEffect(() => {
		setColor(randomColor());
	}, [id, username]);

	return (
		<>
			<AvatarPreview style={{ backgroundColor: color }}>
				{username.substring(0, 2)}
			</AvatarPreview>
		</>
	);
};

export default Avatar;
