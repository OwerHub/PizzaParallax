import React, { useState, useEffect } from "react";
import TableDraws from "./TableDraws";

function TableBook(props) {
  const [isTableAvilable, setTableAvilable] = useState("11111");

  // itt állítsd be a nyitást és az zárást
  let open = 16;
  let close = 23;

  let startArray = [];
  let endArray = [];

  (function arrayMaker() {
    for (let index = open; index <= close; index++) {
      if (index !== open) {
        endArray.push(index);
      }
      if (index !== close) {
        startArray.push(index);
      }
    }
  })();

  function collectData() {
    console.log("in CollectData");

    let sendArray = [];
    let dateValue = document.querySelector("#dateInput").value;
    let startValue = document.querySelector("#startTimeSelect").value;
    let endValue = document.querySelector("#endTimeSelect").value;

    console.log(endValue);

    for (let index = startValue; index <= endValue; index++) {
      /*       console.log(`${dateValue}-${index}`); */
      sendArray.push(`${dateValue}-${index}`);
    }

    fetch("http://localhost:8000/tableCheck", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendArray),
    })
      .then((res) => res.text())
      .then((res) => setTableAvilable(res));
  }

  /*   console.log(isTableAvilable); */

  return (
    <div className="tableBookContainer">
      <h2>TableBook</h2>

      <div className="dateContainer">
        <input
          type="date"
          id="dateInput"
          min="2021-05-05" /* value="2021-05-05" */
        />

        <div className="startTimeContainer">
          <h5>start</h5>
          <select name="startTime" id="startTimeSelect">
            {startArray.map((data) => (
              <option value={data}>{data}:00</option>
            ))}
          </select>
        </div>

        <div className="endTimeContainer">
          <h5>end</h5>
          <select name="endTime" id="endTimeSelect">
            {endArray.map((data) => (
              <option value={data}>{data}:00</option>
            ))}
          </select>
        </div>

        <div className="dateSendButtonDin">
          <button onClick={collectData}>Dátum elküld</button>
        </div>
      </div>

      <div className="tablesContainer">
        <TableDraws key={1} tableNr={1} avilable={isTableAvilable}></TableDraws>
        <TableDraws key={2} tableNr={2} avilable={isTableAvilable}></TableDraws>
        <TableDraws key={3} tableNr={3} avilable={isTableAvilable}></TableDraws>
        <TableDraws key={4} tableNr={4} avilable={isTableAvilable}></TableDraws>
        <TableDraws key={5} tableNr={5} avilable={isTableAvilable}></TableDraws>
      </div>
    </div>
  );
}

export default TableBook;
