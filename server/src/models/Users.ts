const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
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

module.exports = mongoose.model("users", UserSchema);