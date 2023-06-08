import express from "express";
import * as authController from "../controllers/auth.controller";
import { auth } from "../middleware/auth";
const route = express.Router();

route.post("/login", authController.Login);
route.post("/register", authController.Register);
route.get("/profile", auth, authController.Profile);

export default route;
