import { Request, Response, NextFunction } from "express";

const verificationAuthPost = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { login, password } = req.body;
  if (!login || !password) {
    return res.status(200).send({
      title: "query param is missing",
      success: false,
    });
  } else {
    next();
  }
};

export { verificationAuthPost };
