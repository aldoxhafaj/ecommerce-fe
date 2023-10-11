import React from "react";
import Input from "../Input";
import "./search.css";
import Icon from "../Icon";

const Search = ({ onChange }) => {
	return (
		<div className="search-container">
			<Icon name="search" size={21} />
			<Input
				className="search-input"
				type="text"
				placeholder={"Search ..."}
				onChange={(e) => {
					onChange(e.target.value);
				}}
			/>
		</div>
	);
};

export default Search;
