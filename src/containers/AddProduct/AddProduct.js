import React, { useRef } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { addProduct } from "./AddProduct.actions";
import SidebarMenu from "../../components/SidebarMenu/SideBarMenu";

const AddProduct = () => {
	const productDetails = useRef({});

	const getProductDetails = (key, target) => {
		if (key === "imageUrl") {
			productDetails.current[key] = target.files[0];
		} else {
			productDetails.current[key] = target.value;
		}
		
	};

	const addSingleProduct = async () => {
		const { title, imageUrl, price, description } = productDetails.current;

		const response = await addProduct(title, imageUrl, price, description);
		
	};

	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<SidebarMenu />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					height: "80vh",
					gap: "20px",
					flex: 1,
				}}
			>
				<Input
					type={"text"}
					className={"input-bottom"}
					placeholder={"title"}
					onChange={(e) => {
						getProductDetails("title", e.target);
					}}
				/>
				<Input
					type={"file"}
					className={"input-bottom"}
					placeholder={"imageUrl"}
					onChange={(e) => {
						getProductDetails("imageUrl", e.target);
					}}
				/>
				<Input
					type={"number"}
					className={"input-bottom"}
					placeholder={"price"}
					onChange={(e) => {
						getProductDetails("price", e.target);
					}}
				/>
				<Input
					type={"text"}
					className={"input-bottom"}
					placeholder={"description"}
					onChange={(e) => {
						getProductDetails("description", e.target);
					}}
				/>
				<div style={{ width: 800 }}>
					<Button className={"black-btn"} onClick={addSingleProduct}>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
