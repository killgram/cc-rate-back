import { Request, Response } from "express";
import { getLinksService } from "../services";

const getLinks = async (req: Request, res: Response) => {
  const data = await getLinksService();

  res.status(200).send(data);
};

export { getLinks };
