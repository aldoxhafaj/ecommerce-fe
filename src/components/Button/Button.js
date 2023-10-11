import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ className, children, onClick, disabled }) => {
	return (
		<button
			className={!disabled ? className : "disabled"}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

Button.defaultProps = {
	disabled: false,
	className: "",
};

export default Button;
