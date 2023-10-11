import React, { useState } from "react";
import "./paginationBar.css";

const PaginationBar = ({ totalPages, onPageChange }) => {
	const [currentPage, setCurrentPage] = useState(1);

	const navigateToPage = (page) => {
		setCurrentPage(page);
		onPageChange(page);
	};

	const paginationTabs = () => {
		const tab = [];
		const start = Math.max(1, currentPage - 2);
		const end = Math.min(currentPage + 2, totalPages);

		for (let i = start; i <= end; i++) {
			tab.push(
				<div
					key={i}
					className={i === currentPage ? "active" : "pagination-tab"}
					onClick={() => {
						navigateToPage(i);
					}}
				>
					{i}
				</div>
			);
		}

		return tab;
	};

	return (
		<div className="pagination-container">
			{currentPage > 1 && (
				<div
					className="pagination-tab"
					onClick={() => navigateToPage(currentPage - 1)}
				>
					Prev
				</div>
			)}
			{paginationTabs().map((tab) => tab)}
			{currentPage < totalPages && (
				<div
					className="pagination-tab"
					onClick={() => navigateToPage(currentPage + 1)}
				>
					Next
				</div>
			)}
		</div>
	);
};

export default PaginationBar;
