import { Request, Response } from "express";
import { getSupportService } from "../services";

const getSupport = async (req: Request, res: Response) => {
  const data = await getSupportService();

  res.status(200).send(data);
};

export { getSupport };
