import { client, SupportEnum } from "../configurations";

const getSupportService = async () => {
  const dbClient = await client.connect();
  const cData = dbClient
    .db(SupportEnum.SUPPORT_TABLE)
    .collection(SupportEnum.SUPPORT_DATA);
  const dbData = await cData.find({}).toArray();
  return dbData.map((item) => {
    return {
      email: item.email,
    };
  });
};

export { getSupportService };
