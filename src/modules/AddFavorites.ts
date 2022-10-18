import { Request, Response } from "express";
import { addFavoritesCurrencyService } from "../services";

const addFavorites = async (req: Request, res: Response) => {
  const { user, name, symbol, id } = req.body;

  if (!user || !name || !symbol || !id) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }

  await addFavoritesCurrencyService(user, name, symbol, id);

  res.status(200).send({
    title: "currency successfully add",
    success: true,
  });
};

export { addFavorites };
