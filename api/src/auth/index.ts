import { getUser, getGroups } from "./msgraph";
export type userData = {
  displayName: string;
  userId?: string;
  accessGroups: accessGroups[];
};
type accessGroups = {
  name: string;
  id: string;
};

export async function getUserData(accessToken: string): Promise<userData> {
  try {
    const userData = await getUser(accessToken);
    const accessGroups = await getGroups(accessToken);
    const filteredGroups = accessGroups.value
      .filter((group: any) => {
        return group.displayName.startsWith("Brukere Monitor");
      })
      .map((fg: any) => {
        return { name: fg.displayName, id: fg.id };
      });

    return {
      displayName: userData.displayName || "(Ukjent)",
      accessGroups: filteredGroups || [{ name: "dummy", id: "123" }],
    };
  } catch (err) {
    console.error(
      "Could not get data from msgraph",
      err,
      err?.response?.status,
      err?.response?.body
    );
    return { displayName: "Ikke innlogget", accessGroups: [] };
  }
}
