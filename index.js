require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const { print, getHome, createUser } = require("./controller");

app.get("/", print);

app.get("/home", getHome);

app.post("/user", createUser);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
