import React from "react";
import { Images } from "../../Themes/Images";
import PropTypes from "prop-types";

const Icon = ({ name, className, size, color, onClick }) => {
	const iconStyle = color && {
		filter: `invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)`,
	};

	return (
		<img
			src={Images[name]}
			className={className}
			alt={`${name} error`}
			style={{ width: size, height: size, ...iconStyle }}
			onClick={onClick}
		/>
	);
};

Icon.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
	size: PropTypes.number,
};

Icon.defaultProps = {
	name: "",
	className: "",
};

export default Icon;
