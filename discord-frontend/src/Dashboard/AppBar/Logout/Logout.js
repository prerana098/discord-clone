import React, { useState } from "react";
import LogoutButton from "./LogoutButton";
import LogoutDialogue from "./LogoutDialogue";

const Logout = () => {
	const [isDialogueOpen, setIsDialogueOpen] = useState(false);

	const handleOpenDialogue = () => {
		setIsDialogueOpen(true);
	};

	const handleCloseDialogue = () => {
		setIsDialogueOpen(false);
	};
	return (
		<>
			<LogoutDialogue
				isDialogueOpen={isDialogueOpen}
				closeDialogueHandler={handleCloseDialogue}
			/>
			<LogoutButton handleOpenDialogue={handleOpenDialogue} />
		</>
	);
};

export default Logout;
