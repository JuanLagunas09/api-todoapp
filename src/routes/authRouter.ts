import express from "express";
import * as authController from "../controllers/authController";
export const authRouter = express.Router();

authRouter.post("/login", authController.login);
authRouter.post("/signup", authController.signup);