const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());

// a cors valamiért csak --save nélkül ment fel

let pizzaList = require("./datapack/pizzaList.json");

app.get("/ping", function (req, res) {
  res.send("pong");
});

app.get("/pizzalist", function (req, res) {
  res.send(pizzaList);
});

app.listen(PORT, function () {
  console.log("Express server listening on port ", PORT); // eslint-disable-line
});
