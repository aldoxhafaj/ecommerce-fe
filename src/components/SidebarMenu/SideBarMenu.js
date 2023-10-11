import React, { useState } from "react";
import Icon from "../Icon";
import "./sidebarMenu.css";
import { motion, AnimatePresence } from "framer-motion";

import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {
	const [menuOpen, setMenuOpen] = useState(true);
	const navigate = useNavigate();

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<motion.div
			className={`sidebar`}
			initial={{ width: 20 }}
			animate={{ flex: menuOpen ? 0.15 : 0 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			<div className="title-container">
				{menuOpen && (
					<>
						<motion.div
							initial={{ opacity: 0, x: "-100%" }}
							animate={{ opacity: 1, x: "0%" }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.8, ease: "easeInOut" }}
						>
							<p className="sidebar-title">E COMMERCE</p>
						</motion.div>
					</>
				)}

				<Icon
					name="menu"
					size={22}
					color={"white"}
					onClick={toggleMenu}
				/>
			</div>
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						className="nav-options"
						initial={{ opacity: 0, x: "-100%" }}
						animate={{ opacity: 1, x: "0%" }}
						transition={{ duration: 0.8, ease: "easeInOut" }}
					>
						<div
							className="sidebar-option"
							onClick={() => {
								navigate("/dashboard");
							}}
						>
							<Icon name="dashboard" size={18} color={"white"} />
							<p className="single-option">Dashboard</p>
						</div>
						<div
							className="sidebar-option"
							onClick={() => {
								navigate("/cart");
							}}
						>
							<Icon name="cart" size={21} color={"white"} />
							<p className="single-option">Cart</p>
						</div>
						<div
							className="sidebar-option"
							onClick={() => {
								localStorage.removeItem("token");
								navigate("/");
							}}
						>
							<Icon name="logout" size={20} color={"white"} />
							<p className="single-option">Logout</p>
						</div>
						<div
							className="sidebar-option"
							onClick={() => {
								navigate("/add-product");
							}}
						>
							<Icon name="dashboard" size={18} color={"white"} />
							<p className="single-option">Add Product</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default SidebarMenu;
