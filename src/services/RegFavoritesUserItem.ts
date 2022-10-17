import { client, FavoritesEnum } from "../configurations";

const regFavoritesUserItem = async (login: string) => {
  const dbClient = await client.connect();
  const cUsers = dbClient
    .db(FavoritesEnum.FAVORITES_TABLE)
    .collection(FavoritesEnum.FAVORITES_DATA);
  await cUsers.insertOne({
    user: login,
    favorites: [],
  });
};

export { regFavoritesUserItem };
