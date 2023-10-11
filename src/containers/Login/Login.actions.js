import axios from "axios";
import { BASE_URL } from "../../Utils";

const getLoggedIn = async (email, password) => {
	try {
		const response = await axios.post(`${BASE_URL}/login`, {
			email,
			password,
		});
		localStorage.setItem("token", response.data.token);
		return response.data;
	} catch (error) {
		return error?.response?.data;
	}
};

export { getLoggedIn };
