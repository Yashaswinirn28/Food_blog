const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToDB = require("./config/connection");
const app = express();
const mysql = require("mysql");
app.use(cors());
app.use(bodyParser.json());




app.get("/test", (req, res) => {
  res.status(200).json({ message: "hello there" });
});

const posts_controller = require("./controller/posts_controller");
app.use("/posts", posts_controller);
app.use("/users", posts_controller);

app.listen("3001", (err) => {
  console.log("listening at 3001..");
});
