import { client, CurrencyListEnum } from "../configurations";

const getCurrencyListService = async () => {
  const dbClient = await client.connect();
  const cData = dbClient
    .db(CurrencyListEnum.CURRENCY_LIST_TABLE)
    .collection(CurrencyListEnum.CURRENCY_LIST_DATA);
  const dbData = await cData.find({}).toArray();

  if (dbData.length !== 0) {
    return dbData[0].list;
  }
};

export { getCurrencyListService };
