import Axios from "axios";

export async function getAllActiveForms() {
	const request = `http://localhost/forms/active`;
	try {
		const response = await Axios.get(request, {
			headers: {
				Accept: "application/json",
			},
		});
		return response.data;
	} catch (err: any) {
		console.error(
			"Could not get forms",
			err,
			err?.response?.status,
			err?.response?.body,
		);
		return [];
	}
}
