import React from "react";
import "./App.css";
import Login from "./containers/Login";
import Register from "./containers/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import AddProduct from "./containers/AddProduct";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route
				path="/dashboard"
				element={
					<RequireAuth>
						<Dashboard />
					</RequireAuth>
				}
			/>
			<Route
				path="/add-product"
				element={
					<RequireAuth>
						<AddProduct />
					</RequireAuth>
				}
			/>
		</Routes>
	);
};

export default App;
