import React, { useRef } from "react";
import Icon from "../../components/Icon";
import Input from "../../components/Input";
import "./register.css";
import Button from "../../components/Button";
import { getSignedUp } from "./Register.actions";

import { useNavigate } from "react-router-dom";

const Register = () => {
	const userDetails = useRef({});
	const navigate = useNavigate();

	const onChange = (key, value) => {
		userDetails.current[key] = value;
	};

	const signUp = async () => {
		const { name, email, password, confirmPassword } = userDetails.current;
		if (password === confirmPassword) {
			const response = await getSignedUp(
				name,
				email,
				password,
				confirmPassword
			);
			if (response) {
				navigate("/");
			}
		} else {
			throw new Error("Password does not match");
		}
	};

	return (
		<div className="register-container">
			<div className="register">
				<div className="title-container">
					<p className="project-title">
						<p className="project-decor">dip</p>ch
					</p>
				</div>
				<p className="register-title">Create account</p>
				<div className="register-input">
					<Icon className="register-icon" name="user" size={18} />
					<Input
						className="input-none"
						type="text"
						placeholder={"John Doe"}
						onChange={(e) => {
							onChange("name", e.target.value);
						}}
					/>
				</div>
				<div className="register-input">
					<Icon className="register-icon" name="email" size={18} />
					<Input
						className="input-none"
						type="text"
						placeholder={"Your Email"}
						onChange={(e) => {
							onChange("email", e.target.value);
						}}
					/>
				</div>
				<div className="register-input">
					<Icon
						className="register-icon"
						name="filledPadlock"
						size={18}
					/>
					<Input
						className="input-none"
						type="password"
						placeholder={"Password"}
						onChange={(e) => {
							onChange("password", e.target.value);
						}}
					/>
				</div>
				<div className="register-input">
					<Icon className="register-icon" name="padlock" size={18} />
					<Input
						className="input-none"
						type="password"
						placeholder={"Repeat your password"}
						onChange={(e) => {
							onChange("confirmPassword", e.target.value);
						}}
					/>
				</div>
				<Button className="sky-btn" onClick={signUp}>
					Register
				</Button>
			</div>
		</div>
	);
};

export default Register;
