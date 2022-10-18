import { client, FavoritesEnum } from "../configurations";

const deleteFavoritesCurrencyService = async (user: string, cId: number) => {
  const dbClient = await client.connect();
  const cFavorites = dbClient
    .db(FavoritesEnum.FAVORITES_TABLE)
    .collection(FavoritesEnum.FAVORITES_DATA);

  const dbData = await cFavorites.find({ user: user }).toArray();
  let totalFavorites = dbData[0].favorites;

  const deleteItem = totalFavorites.filter((item: any) => {
    return item.id === cId;
  });

  if (deleteItem.length !== 0) {
    totalFavorites = totalFavorites.filter((item: any) => {
      return item.id !== cId;
    });
    await cFavorites.updateOne(
      { user: user },
      {
        $set: {
          favorites: totalFavorites,
        },
      }
    );
  }
};

export { deleteFavoritesCurrencyService };
