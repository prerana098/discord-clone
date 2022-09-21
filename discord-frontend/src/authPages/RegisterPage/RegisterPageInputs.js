import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const RegisterPageInputs = (props) => {
	const { mail, setMail, password, setPassword, username, setUsername } = props;
	return (
		<>
			<InputWithLabel
				value={mail}
				setValue={setMail}
				type='email'
				label='email'
				placeholder='Enter e-mail address'
			/>
			<InputWithLabel
				value={username}
				setValue={setUsername}
				type='text'
				label='username'
				placeholder='Enter username'
			/>
			<InputWithLabel
				value={password}
				setValue={setPassword}
				type='password'
				label='password'
				placeholder='Enter password'
			/>
		</>
	);
};

export default RegisterPageInputs;
