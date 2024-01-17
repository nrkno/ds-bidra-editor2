import Axios from "axios";
import {getApiUrl} from "../config";

import type { userData } from "../../../api/src/auth";


export async function saveFormToDatabase(form: any): Promise<boolean> {

  return true;
}
export async function getAllAgreements() {
  const request = `${getApiUrl()}agreement`;
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
  const request =  `${getApiUrl()}forms/active`;
  try {
    const response = await Axios.get(request, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (err: any) {
    console.error("Could not get forms", err, err?.response?.status, err?.response?.body);
    return [];
  }
}

export async function getUserData():Promise<userData> {
  const request =  `${getApiUrl()}me`;
  try {
    const response = await Axios.get(request, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (err: any) {
    console.error("No access token present, so can´t get user DisplayName or Group membership");
    return { displayName: "Ikke innlogget", accessGroups: [] }
  }
}
