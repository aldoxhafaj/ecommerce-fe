import axios from "axios";
import { BASE_URL } from "../../Utils";

const addProduct = async (title, imageUrl, price, description) => {
	try {
		const formData = new FormData();
		formData.append("title", title);
		formData.append("image", imageUrl);
		formData.append("price", price);
		formData.append("description", description);

		const response = await axios.post(`${BASE_URL}/addProduct`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export { addProduct };
