import jwt from "jsonwebtoken";
import { accessTokenSecret } from "../configurations";

const generateAccessToken = (username: string) => {
  return jwt.sign({ username: username }, accessTokenSecret);
};

const verifyAccessToken = (token: string): void | boolean => {
  return jwt.verify(token, accessTokenSecret, (err) => {
    return !err;
  });
};

export { generateAccessToken, verifyAccessToken };
