const express = require("express");
const app = express();
const port = process.env.PORT ?? 3000;
const cors = require("cors");
const connectDb = require("./config/config");
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    optionSuccessStatus: 200,
  })
);
connectDb();

app.listen(port, () => {
  console.log("server running");
});
