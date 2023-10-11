import React from "react";

import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
	const userToken = localStorage.getItem("token");
	if (!userToken) {
		return <Navigate to="/" />;
	} else {
		return children;
	}
};
export default RequireAuth;
