const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const connectDb = require("./config/config");
require("dotenv").config();
app.use(express.json());
app.use(cors());

connectDb();

app.listen(port, () => {
  console.log("server running");
});
