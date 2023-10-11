import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { getLoggedIn } from "./Login.actions";
import "./login.css";

import { useNavigate } from "react-router-dom";
import Icon from "../../components/Icon";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const userLogin = async () => {
		const response = await getLoggedIn(email, password);
		if (response.error) {
			setError(response.error);
		} else {
			navigate("/dashboard");
		}
	};

	const isDisabled = () => {
		return email === "" || password === "";
	};

	const emailError = error.includes("email");
	const passwordError = error.includes("password");

	return (
		<div className="login-container">
			<div className="login">
				<div className="title-container">
					<div className="project-title">
						<p className="project-decor">dip</p>ch
					</div>
				</div>
				<p className="login-title">Login</p>
				<div className="loginForm-container">
					<div className="login-form">
						<p className="input-title">Email</p>
						<div className="error-container">
							<Input
								className={`input-bottom ${
									emailError && "red"
								}`}
								type="text"
								placeholder="example@gmail.com"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
							{emailError && (
								<Icon
									className={"error-icon"}
									name="error"
									size={19}
								/>
							)}
						</div>
						{emailError && <p className="error">{error}</p>}
					</div>
					<div className="login-form">
						<p className="input-title">Password</p>
						<div className="error-container">
							<Input
								className={`input-bottom ${
									passwordError && "red"
								}`}
								type="password"
								placeholder={"Your Password"}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
							{passwordError && (
								<Icon
									className={"error-icon"}
									name="error"
									size={19}
								/>
							)}
						</div>
						{passwordError && <p className="error">{error}</p>}
					</div>
				</div>
				<Button
					className={"black-btn"}
					disabled={isDisabled()}
					onClick={userLogin}
				>
					Login
				</Button>
				<div className="register-link">
					<p className="register-info">Not registered yet!</p>
					<p
						className="signUp-link"
						onClick={() => navigate("/register")}
					>
						Sign up here!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
