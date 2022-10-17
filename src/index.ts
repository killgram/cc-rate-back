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

// POST
app.post("/signUp", verificationAuthPost, signUp);

// listener
app.listen(PORT, (): void => {
  console.log(`Server running on port here 👉 ${PORT}`);
});
