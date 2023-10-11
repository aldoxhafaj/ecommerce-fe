import React, { useEffect, useState } from "react";
import SidebarMenu from "../../components/SidebarMenu/SideBarMenu";
import Search from "../../components/Search";
import Product from "../../components/Product";
import "./dashboard.css";
import { getAllProducts } from "./Dashboard.actions";
import PaginationBar from "../../components/PaginationBar";

const Dashboard = () => {
	const [products, setProducts] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const itemPerPage = 5;
	const handleSearch = (value) => {};

	const getProducts = async () => {
		const response = await getAllProducts(currentPage, itemPerPage);

		setProducts(response?.products);
		setTotalItems(response?.totalItems);
	};
	useEffect(() => {
		getProducts();
	}, [currentPage]);

	return (
		<div className="dashboard">
			<SidebarMenu />
			<div className="products-dashboard">
				<div className="searchable">
					<Search onChange={handleSearch} />
				</div>
				<div className="products-view">
					{products?.map((product, index) => {
						return <Product key={index} product={product} />;
					})}
				</div>
				<div className="dashboard-pagination">
					<PaginationBar
						totalPages={Math.ceil(totalItems / itemPerPage)}
						onPageChange={(page) => {
							setCurrentPage(page);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
