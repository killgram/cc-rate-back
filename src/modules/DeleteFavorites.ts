import { Request, Response } from "express";
import { deleteFavoritesCurrencyService } from "../services";

const deleteFavorites = async (req: Request, res: Response) => {
  const { user, id } = req.body;

  if (!user || !id) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  }

  await deleteFavoritesCurrencyService(user, id);

  res.status(200).send({
    title: "currency successfully delete",
    success: true,
  });
};

export { deleteFavorites };
