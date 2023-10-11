import React from "react";
import PropTypes from "prop-types";
import "./input.css";

const Input = ({ type, className, onChange, placeholder }) => {
	return (
		<input
			type={type}
			className={className}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

Input.propTypes = {
	type: PropTypes.oneOf([
		"text",
		"password",
		"time",
		"dateTime-local",
		"file",
	]),
	className: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
};

Input.defaultProps = {
	type: "text",
	className: "",
	placeholder: "",
};

export default Input;
