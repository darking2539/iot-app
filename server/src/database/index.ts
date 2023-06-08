const mongoose = require("mongoose");
const mongoDBURI = process.env.MONGODB_URI || "mongodb://admin:password@localhost:27017/admin";

export const connectToDB = () => {
  mongoose.connect(mongoDBURI,{ useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err: any) => console.log(err));
};
