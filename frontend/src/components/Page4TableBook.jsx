import React, { useState, useEffect } from "react";
import TableDraws from "./TableDraws";
import OrderModal from "./OrderModal";

function TableBook(props) {
  // itt állítsd be a nyitást és az zárást
  let open = 16;
  let close = 23;

  const [isTableAvilable, setTableAvilable] = useState("11111");

  const [isValid, setValid] = useState(true);
  const [isModal, setModal] = useState(false);

  const [isSelectTable, setSelectTable] = useState(0);
  const [isAllHours, setAllHours] = useState(0);

  const [isSelectedStartTime, setSelectedStartTime] = useState(16);
  const [isSelectedEndTime, setSelectedEndTime] = useState(17);

  const [isEndArray, setEndArray] = useState([]);
  const [isStartArray, setStartArray] = useState([]);

  // start és endarray beállítása
  let startArray = [];
  useEffect(() => {
    let endArray = [];
    for (let index = open; index <= close; index++) {
      if (index !== close) {
        startArray.push(index);
      }
      if (index !== close) {
        endArray.push(index);
      }
    }
    setEndArray(endArray);
    setStartArray(startArray);
    console.log("startarray In Effect" + startArray);
  }, []);

  // end time array beállítása
  useEffect(() => {
    let endArray2 = [];
    for (let i = isSelectedStartTime; i <= close; i++) {
      i > isSelectedStartTime && endArray2.push(i);
    }
    setEndArray(endArray2);
  }, [isSelectedStartTime]);

  // szabad asztalok ellenőrzése
  function collectData() {
    let sendArray = [];
    let dateValue = document.querySelector("#dateInput").value;
    let startValue = isSelectedStartTime;
    let endValue = isSelectedEndTime;

    for (let index = startValue; index <= endValue; index++) {
      sendArray.push(`${dateValue}-${index}`);
    }

    setAllHours(sendArray);
    fetch("http://localhost:8000/tableCheck", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendArray),
    })
      .then((res) => res.text())
      .then((res) => setTableAvilable(res));
  }

  // Asztal kiválasztása, Modal behívása
  useEffect(() => {
    console.log(`isSeclect: ${isSelectTable}`);
    if (isSelectTable !== 0) {
      setModal(true);
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
          <select
            name="startTime"
            id="startTimeSelect"
            onChange={(e) => {
              const value = e.target.value;
              setSelectedStartTime(value);
            }}
          >
            {isStartArray.map((data, iterator) => (
              <option key={iterator} value={data}>
                {data}:00
              </option>
            ))}
          </select>
        </div>

        <div className="endTimeContainer">
          <h5>end</h5>
          <select
            name="endTime"
            id="endTimeSelect"
            onChange={(e) => {
              const value = e.target.value;
              setSelectedEndTime(value);
            }}
          >
            {isEndArray.map((data, iterator) => (
              <option key={iterator} value={data}>
                {data}:00
              </option>
            ))}
          </select>
        </div>

        <div className="dateSendButtonDin">
          <button onClick={collectData} disabled={!isValid}>
            Dátum elküld
          </button>
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

      {isModal && (
        <OrderModal
          close={() => setModal(false)}
          table={isSelectTable}
          setTable={() => setSelectTable(0)}
          date={isAllHours}
        ></OrderModal>
      )}
    </div>
  );
}

export default TableBook;
