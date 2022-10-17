import { client, AuthEnum } from "../configurations";

const regNewUserService = async (login: string, password: string) => {
  const dbClient = await client.connect();
  const cUsers = dbClient.db(AuthEnum.AUTH).collection(AuthEnum.USER_LIST);
  await cUsers.insertOne({
    login: login,
    password: password,
  });
};

export { regNewUserService };
