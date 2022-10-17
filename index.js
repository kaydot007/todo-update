const express = require("express");
const cors = require("cors");
const connectDb = require('./db/Db')
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
connectDb();

app.get("/", () => {
  res.status(200).send("Hello world");
});

app.use("/", require("./routes/todo"));

const port = process.env.port;
app.listen(port, () => {
  console.log("listening on port 3000");
});
