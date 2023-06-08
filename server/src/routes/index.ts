import express from "express";
import authRoute from "./auth.route";
import deviceRoute from "./device.routes";
import { auth } from "../middleware/auth";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/device", auth, deviceRoute);

export default router;
