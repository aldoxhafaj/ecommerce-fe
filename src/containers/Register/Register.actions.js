import axios from "axios";
import { BASE_URL } from "../../Utils/index";

const getSignedUp = async (name, email, password,confirmPassword) => {
	try {
		const response = await axios.post(`${BASE_URL}/signup`, {
			name,
			email,
			password,
            confirmPassword
		});

		return response;
	} catch (error) {
		console.log(error);
	}
};

export { getSignedUp };
