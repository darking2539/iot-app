const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
  deviceId: {
    type: String,
    required: true
  },
  deviceName: {
    type: String,
    required: true
  },
  protocol: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date, 
    default: Date.now()
  },
  updatedDate: {
    type: Date, 
    default: Date.now()
  }
});

export const Device = mongoose.model("devices", DeviceSchema);