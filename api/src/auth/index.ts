export type userData = {
  displayName: string;
  accessGroups: [{ name: string; id: string }];
};

export async function getUserData(accessToken: string): Promise<userData> {
  console.log("accesstoken to query", accessToken);
  return { displayName: "Anders Ween", accessGroups: [{ name: "test", id: "123412341234" }] };
}
