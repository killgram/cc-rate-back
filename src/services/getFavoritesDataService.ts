import { client, FavoritesEnum } from "../configurations";

const getFavoritesDataService = async (user: string) => {
  const dbClient = await client.connect();
  const cData = dbClient
    .db(FavoritesEnum.FAVORITES_TABLE)
    .collection(FavoritesEnum.FAVORITES_DATA);
  const dbData = await cData.find({ user: user }).toArray();

  if (dbData.length !== 0) {
    return dbData[0].favorites;
  }
};

export { getFavoritesDataService };
