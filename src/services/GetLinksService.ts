import { client, LinksEnum } from "../configurations";

const getLinksService = async () => {
  const dbClient = await client.connect();
  const cData = dbClient
    .db(LinksEnum.LINKS_TABLE)
    .collection(LinksEnum.LINKS_DATA);
  const dbData: any = await cData.find({}).toArray();

  if (dbData.length !== 0) {
    delete dbData[0]._id;
    return dbData;
  }
};

export { getLinksService };
