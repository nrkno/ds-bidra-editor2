import { getUser, getGroups } from "./msgraph";
export type userData = {
  displayName: string;
  accessGroups: accessGroups[];
};
type accessGroups = {
  name: string;
  id:string;
}

export async function getUserData(accessToken: string): Promise<userData> {
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
}
