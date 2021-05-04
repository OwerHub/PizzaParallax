const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());

app.get("/ping", function (req, res) {
  res.send("pong");
});

app.listen(PORT, function () {
  console.log("Express server listening on port ", PORT); // eslint-disable-line
});
