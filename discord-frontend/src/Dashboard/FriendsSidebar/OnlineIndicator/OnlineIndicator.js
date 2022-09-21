import React from "react";

const OnlineIndicator = ({ isOnline }) => {
	return (
		<div
			style={
				isOnline
					? {
							backgroundColor: "#3BA55D",
							height: "10px",
							width: "10px",
							borderRadius: "50%",
							border: "3.5px solid #2F3136 ",
							marginTop: "10%",
							marginLeft: "-5%",
							"&:hover": {
								border: "3.5px solid #3C3F45 ",
							},
					  }
					: {
							backgroundColor: "#747F8D",
							height: "10px",
							width: "10px",
							borderRadius: "50%",
							border: "3.5px solid #2F3136 ",
							marginTop: "10%",
							marginLeft: "-5%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
					  }
			}
		>
			<div
				style={
					isOnline
						? {}
						: {
								backgroundColor: "#2F3136",
								height: "4.5px",
								width: "4.5px",
								borderRadius: "50%",
						  }
				}
			></div>
		</div>
	);
};

export default OnlineIndicator;
