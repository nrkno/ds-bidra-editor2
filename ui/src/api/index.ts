import Axios from "axios";

export async function getAllAgreements() {
  const request = `http://localhost/agreement`;
  try {
    const response = await Axios.get(request, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (err: any) {
    console.error("Could not get agreements", err, err?.response?.status, err?.response?.body);
  }
}
export async function getAllActiveForms() {
  const request = `http://localhost/forms/active`;
  try {
    const response = await Axios.get(request, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
    /* 		return response.data.map((of:any) => {
			return {
				...of,
				form: mapOldForm(of.form)
			}
		}); */
  } catch (err: any) {
    console.error("Could not get forms", err, err?.response?.status, err?.response?.body);
    return [];
  }
}
