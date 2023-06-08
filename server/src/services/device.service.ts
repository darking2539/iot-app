import { hashPassword, verifyPassword } from "../middleware/hash";
import { createJWTToken } from "../middleware/auth";
import { responseUtils } from "../utils/responseUtils";
import { Device } from "../models/Device"
const mongoose = require("mongoose");


export const CreatedDevice = async (
    deviceId: string,
    deviceName: string,
    protocol: string,
    username: string
): Promise<any> => {

    const device = await Device.findOne({ deviceId: deviceId })

    if (device) {
        return responseUtils(400, "error", "deviceId already exists")
    }

    const newDevice = new Device({
        deviceId: deviceId,
        deviceName: deviceName,
        protocol: protocol,
        username: username
    });

    const createDevice = await newDevice.save()
    
    if (!createDevice) {
        return responseUtils(400, "error", createDevice)
    }

    return responseUtils(200, "OK", "Created Device Sucessful")
}

export const EditDevice = async (
    id: string,
    deviceId: string,
    deviceName: string,
    protocol: string
): Promise<any> => {

    var ObjectId = mongoose.Types.ObjectId; 
    const filter = { _id: new ObjectId(id) };
    const update = { deviceId: deviceId, deviceName: deviceName, protocol: protocol, updatedDate: Date.now() };
    
    const updateDevice = await Device.findOneAndUpdate(filter, update)

    if (!updateDevice) {
        return responseUtils(400, "error", updateDevice)
    }

    return responseUtils(200, "OK", "Updated Device Sucessful")
}

export const ListDevice = async (
    username: string
): Promise<any> => {


    const filter = { username: username };
    const findDevice = await Device.find(filter).sort({createdDate: -1})

    return {statusCode: 200, status: "OK", message: "OK", data: findDevice}
}

export const DeleteDevice = async (
    id: string
): Promise<any> => {

    var ObjectId = mongoose.Types.ObjectId; 
    const filter = { _id: new ObjectId(id) };
    const deletedDevice = await Device.findOneAndDelete(filter)

    if (!deletedDevice) {
        return responseUtils(400, "error", deletedDevice)
    }

    return responseUtils(200, "OK", "Deleted Device Sucessful")
}

export const GetDevice = async (
    id: string
): Promise<any> => {

    var ObjectId = mongoose.Types.ObjectId; 
    const filter = { _id: new ObjectId(id) };
    const deviceDetail = await Device.findOne(filter)

    if (!deviceDetail) {
        return responseUtils(400, "error", deviceDetail)
    }

    return {statusCode: 200, status: "OK", message: "OK", data: deviceDetail}
}