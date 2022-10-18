import { Request, Response } from "express";
import { getCurrencyListService } from "../services";

const getCurrencyList = async (req: Request, res: Response) => {
  const data = await getCurrencyListService();

  res.status(200).send(data);
};

export { getCurrencyList };
