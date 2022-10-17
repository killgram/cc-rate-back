import { Request, Response } from "express";
import {
  checkExistUserService,
  regNewUserService,
  regFavoritesUserItem,
} from "../services";

const signUp = async (req: Request, res: Response) => {
  const { login, password } = req.body;
  const isExist = await checkExistUserService(login);

  if (isExist) {
    return res.status(200).send({
      title: "login already exist",
      success: false,
    });
  }

  await regNewUserService(login, password);

  await regFavoritesUserItem(login);

  res.status(200).send({
    title: "user successfully registered",
    success: true,
  });
};

export { signUp };
