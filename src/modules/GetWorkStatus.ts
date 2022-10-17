import { Request, Response } from "express";

const getWorkStatus = (req: Request, res: Response) => {
  res.status(200).send({
    title: "CC-rate_back is working correctly",
    success: true,
  });
};

export { getWorkStatus };
