import axios from "axios";
import { BASE_URL } from "../../Utils/index";

const getAllProducts = async (page, take) => {
	try {
		const response = await axios.get(
			`${BASE_URL}/products?page=${page}&take=${take}`
		);

		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export { getAllProducts };
