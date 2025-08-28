require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const { print, home, user } = require("./controller");

app.get("/", print);

app.get("/home", home);

app.post("/user", user);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
