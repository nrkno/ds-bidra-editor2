import axios from "axios";

export async function getUser(accessToken: string): Promise<any> {
  try {
    const user = await axios.get("https://graph.microsoft.com/v1.0/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return user.data;
  } catch (error) {
    console.log("error getting userdata", error);
    return { displayName: "dummy" };
  }
}
export async function getGroups(accessToken: string): Promise<any> {
  try {
    const groups = await axios.get("https://graph.microsoft.com/v1.0/me/memberOf", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return groups.data;
  } catch (error) {
    console.log("error getting groups", error);
    return { value: [] };
  }
}