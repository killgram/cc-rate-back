import { Request, Response } from "express";
import { getAboutAppService } from "../services";

const getAboutApp = async (req: Request, res: Response) => {
  const data = await getAboutAppService();

  res.status(200).send(data);
};

export { getAboutApp };
