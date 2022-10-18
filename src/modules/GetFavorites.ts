import { Request, Response } from "express";
import { getFavoritesDataService } from "../services";

const getFavorites = async (req: Request, res: Response) => {
  const { user } = req.query;
  if (!user) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }
  const data = await getFavoritesDataService(String(user));
  res.status(200).send(data);
};

export { getFavorites };
