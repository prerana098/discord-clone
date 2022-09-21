import React from "react";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
	width: "100%",
});

const Label = styled("p")({
	color: "#b9bbbe",
	textTransform: "uppercase",
	fontWeight: "650",
	fontSize: "13px",
});

const Input = styled("input")({
	flexGrow: 1,
	border: "1px solid black",
	height: "40px",
	borderRadius: "3px",
	color: "#dcddde",
	background: "#202225",
	margin: 0,
	fontSize: "13.5px",
	letterSpacing: "0.03em",
	padding: "0 5px",
});

const InputWithLabel = (props) => {
	const { value, setValue, label, type, placeholder } = props;

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<Wrapper>
			<Label>{label}</Label>
			<Input
				value={value}
				onChange={handleChange}
				type={type}
				placeholder={placeholder}
			/>
		</Wrapper>
	);
};

export default InputWithLabel;
