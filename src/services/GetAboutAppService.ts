import { client, AboutAppEnum } from "../configurations";

const getAboutAppService = async () => {
  const dbClient = await client.connect();
  const cData = dbClient
    .db(AboutAppEnum.ABOUT_APP_TABLE)
    .collection(AboutAppEnum.ABOUT_APP_DATA);
  const dbData = await cData.find({}).toArray();
  return dbData.map((item) => {
    return {
      appGit: item.appGit,
      appVersion: item.appVersion,
      author: item.author,
      authorGit: item.authorGit,
      name: item.name,
    };
  });
};

export { getAboutAppService };
