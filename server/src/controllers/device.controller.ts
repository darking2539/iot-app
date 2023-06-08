import { Request, Response } from "express";
import * as deviceService from "../services/device.service";


export const GetListDevice = async (req: Request, res: Response): Promise<void> => {

  const { userData } = req.body;

  try {
    const listDeviceService = await deviceService.ListDevice(userData.username)
    res.status(listDeviceService?.statusCode || 500).send(listDeviceService);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const GetDetailDevice = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {

    const getDeviceService = await deviceService.GetDevice(id)
    res.status(getDeviceService?.statusCode || 500).send(getDeviceService);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const DeleteDevice = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const deleteDeviceService = await deviceService.DeleteDevice(id)
    res.status(deleteDeviceService?.statusCode || 500).send(deleteDeviceService);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const SubmitDevice = async (req: Request, res: Response): Promise<void> => {
  const { id, deviceId, deviceName, protocol, userData } = req.body;
  try {

    if (id === "") {
      const createDeviceService = await deviceService.CreatedDevice(deviceId, deviceName, protocol, userData.username)
      res.status(createDeviceService.statusCode).send(createDeviceService);
    }else {
      const editDeviceService = await deviceService.EditDevice(id, deviceId, deviceName, protocol)
      res.status(editDeviceService.statusCode).send(editDeviceService);
    }

  } catch (error: any) {
    res.status(500).send(error.message);
  }
};