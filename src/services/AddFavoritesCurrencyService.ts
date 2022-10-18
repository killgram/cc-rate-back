import { client, FavoritesEnum } from "../configurations";

const addFavoritesCurrencyService = async (
  user: string,
  cName: string,
  cSymbol: string,
  cId: number
) => {
  const dbClient = await client.connect();
  const cUsers = dbClient
    .db(FavoritesEnum.FAVORITES_TABLE)
    .collection(FavoritesEnum.FAVORITES_DATA);

  const dbData = await cUsers.find({ user: user }).toArray();
  const totalFavorites = dbData[0].favorites;

  const isExist = totalFavorites.filter((item: any) => {
    return item.id === cId;
  });

  if (isExist.length === 0) {
    totalFavorites.push({
      name: cName,
      symbol: cSymbol,
      id: cId,
    });
    await cUsers.updateOne(
      { user: user },
      {
        $set: {
          favorites: totalFavorites,
        },
      }
    );
  }
};

export { addFavoritesCurrencyService };
