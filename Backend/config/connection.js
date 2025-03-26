const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "Ritage_signup_users",
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
