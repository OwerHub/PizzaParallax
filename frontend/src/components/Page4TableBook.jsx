import React, { useState, useEffect } from "react";
import TableDraws from "./TableDraws";
import OrderCarousel from "./OrderCarousel";

function TableBook(props) {
  const [isTableAvilable, setTableAvilable] = useState("11111");
  const [isSelectTable, setSelectTable] = useState(0);
  const [isCarousel, setCarousel] = useState(false);

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

  // szabad asztalok ellenőrzése

  function collectData() {
    console.log("in CollectData");

    let sendArray = [];
    let dateValue = document.querySelector("#dateInput").value;
    let startValue = document.querySelector("#startTimeSelect").value;
    let endValue = document.querySelector("#endTimeSelect").value;

    console.log(endValue);

    for (let index = startValue; index <= endValue; index++) {
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

  // Asztal kiválasztása, carousel behívása
  console.log(`isSeclect: ${isSelectTable}`);

  useEffect(() => {
    if (isSelectTable !== 0) {
      setCarousel(true);
    }
  }, [isSelectTable]);

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
            {startArray.map((data, iterator) => (
              <option key={iterator} value={data}>
                {data}:00
              </option>
            ))}
          </select>
        </div>

        <div className="endTimeContainer">
          <h5>end</h5>
          <select name="endTime" id="endTimeSelect">
            {endArray.map((data, iterator) => (
              <option key={iterator} value={data}>
                {data}:00
              </option>
            ))}
          </select>
        </div>

        <div className="dateSendButtonDin">
          <button onClick={collectData}>Dátum elküld</button>
        </div>
      </div>

      <div className="tablesContainer">
        {[1, 2, 3, 4, 5].map((data) => (
          <TableDraws
            key={data}
            tableNr={data}
            avilable={isTableAvilable}
            setTableNr={setSelectTable}
          ></TableDraws>
        ))}
      </div>

      {isCarousel && (
        <OrderCarousel
          close={() => setCarousel(false)}
          table={isSelectTable}
          setTable={() => setSelectTable(0)}
        ></OrderCarousel>
      )}
    </div>
  );
}

export default TableBook;
