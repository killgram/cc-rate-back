import { client, AuthEnum } from "../configurations";

const checkExistUserService = async (login: string): Promise<boolean> => {
  let isExist = false;

  const dbClient = await client.connect();
  const cUsers = dbClient.db(AuthEnum.AUTH).collection(AuthEnum.USER_LIST);
  const dbUsers = await cUsers.find({ login: login }).toArray();

  if (dbUsers.length) {
    isExist = true;
  }

  return isExist;
};

export { checkExistUserService };
