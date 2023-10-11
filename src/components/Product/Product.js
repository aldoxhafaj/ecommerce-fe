import React from "react";
import Icon from "../Icon";
import { BASE_URL } from "../../Utils";

const Product = ({ product }) => {
	const { title, price, imageUrl } = product;

	return (
		<div className="product-view">
			<div className="product-label">
				<p className="label">Sale!</p>
			</div>
			<img
				className="product-image"
				src={`${BASE_URL}/${imageUrl}`}
				alt="error"
			/>
			<p className="product-title">{title}</p>
			<div className="star-container">
				{[...Array(5)].map((stars, index) => {
					return <Icon key={index} name="star" size={22} />;
				})}
			</div>
			<div className="price-container">
				<p className="prev-price">{price}$</p>
				<p className="actual-price">{price}$</p>
			</div>
			<div className="add-to-cart">
				<Icon name="cart" size={25} color={"white"} />
				ADD TO CART
			</div>
		</div>
	);
};

export default Product;
