const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDB = require("./config/connection");
const cors = require("cors");

connectDB();

app.use(cors());
app.use(express.json());
app.use("/", require("./routes/user.routes")); // user routes

const PORT = process.env.PORT || 3005;
app.listen(PORT, () =>
  console.log(`The server is running on port http://localhost:${PORT}/`)
);
