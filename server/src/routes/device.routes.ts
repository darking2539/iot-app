import express from "express";
import * as deviceController from "../controllers/device.controller";
const route = express.Router();

route.get("/:id", deviceController.GetDetailDevice);
route.post("/list", deviceController.GetListDevice);
route.post("/submit", deviceController.SubmitDevice);
route.delete("/delete/:id", deviceController.DeleteDevice);

export default route;
