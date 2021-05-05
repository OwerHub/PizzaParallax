const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());

// a cors valamiért csak --save nélkül ment fel

let pizzaList = require("./datapack/pizzaList.json");
let reservList = require("./datapack/reservList.json");

app.get("/ping", function (req, res) {
  res.send("pong");
});

// lekéri a pizzák listját
app.get("/pizzalist", function (req, res) {
  res.send(pizzaList);
});

// AsztalFogalás-ellenőrzés
app.post("/tableCheck", (req, res) => {
  let resVariable = "11111";

  req.body.map((data) => {
    /* console.log(`send: ${data}`); */
    reservList.forEach((element) => {
      element.reserve.forEach((hour) => {
        /*  console.log(`Foglalva ${hour.slice(0, 13)} kérdezve: ${data}`); */

        if (hour.slice(0, 13) == data) {
          /*  console.log(`asztal foglalva ${hour.slice(14, 15)}`); */
          let tableNr = parseInt(hour.slice(14, 15));
          let splitRes = resVariable.split("");
          splitRes[tableNr - 1] = "0";
          let backString = splitRes.join("");
          resVariable = backString;
          /*  console.log(backString); */
        }
        /*   console.log(hour.slice(0, 10)); */
      });
    });
  });

  console.log(`resvariable is : ${resVariable}`);
  res.send(resVariable);
});

app.listen(PORT, function () {
  console.log("Express server listening on port ", PORT); // eslint-disable-line
});
