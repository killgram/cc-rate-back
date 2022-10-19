import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Application = express();
const PORT = process.env.PORT || 9987;

import {
  getWorkStatus,
  getAboutApp,
  getSupport,
  signUp,
  signIn,
  addFavorites,
  deleteFavorites,
  getFavorites,
  getCurrencyList,
  getLinks,
} from "./modules";

import {
  authenticateJWT,
  verificationAuthGet,
  verificationAuthPost,
} from "./middleware";

// configuration
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// GET
app.get("/status", getWorkStatus);
app.get("/getAboutApp", authenticateJWT, getAboutApp);
app.get("/getSupport", authenticateJWT, getSupport);
app.get("/signIn", verificationAuthGet, signIn);
app.get("/getFavorites", authenticateJWT, getFavorites);
app.get("/getCurrencyList", authenticateJWT, getCurrencyList);
app.get("/getLinks", authenticateJWT, getLinks);

// POST
app.post("/signUp", verificationAuthPost, signUp);
app.post("/addFavorites", authenticateJWT, addFavorites);
app.post("/deleteFavorites", authenticateJWT, deleteFavorites);

// listener
app.listen(PORT, (): void => {
  console.log(`Server running on port here 👉 ${PORT}`);
});
