import React, { useState, useEffect } from "react";
import TableDraws from "./TableDraws";
import OrderModal from "./OrderModal";

import getHight from "../utils/getHeight";

function TableBook(props) {
  // itt állítsd be a nyitást és az zárást
  let open = 16;
  let close = 23;

  const [isTableAvilable, setTableAvilable] = useState("11111");

  /*   const [isValid, setValid] = useState(true); */
  const [isModal, setModal] = useState(false);

  const [isSelectTable, setSelectTable] = useState(0);
  const [isSelectedStartTime, setSelectedStartTime] = useState(16);
  const [isSelectedEndTime, setSelectedEndTime] = useState(17);
  const [isSelectedDate, setSelectedDate] = useState(false);

  const [isTomorrow, setTomorrow] = useState("");
  const [isAllHours, setAllHours] = useState(0);
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
    /*   console.log("startarray In Effect" + startArray); */
  }, []);

  // end time array beállítása
  useEffect(() => {
    let endArray2 = [];
    for (let i = isSelectedStartTime; i <= close; i++) {
      i > isSelectedStartTime && endArray2.push(i);
    }
    setEndArray(endArray2);
  }, [isSelectedStartTime]);

  // ---- modal bezárásakor frissíti az asztalokat

  useEffect(() => {
    if (isModal === false) {
      collectData();
    }
  }, [isModal]);

  // ----szabad asztalok ellenőrzése, fetch
  function collectData() {
    let sendArray = [];
    let dateValue = isSelectedDate;
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

  useEffect(() => {
    isSelectedDate && collectData();
  }, [isSelectedDate, isSelectedStartTime, isSelectedEndTime]);

  // minimum dátum beállítása

  function today() {
    let dateNow = new Date();
    let year = dateNow.getFullYear();
    let month = dateNow.getMonth() + 1;
    month < 10 && (month = `0${month}`);
    let day = dateNow.getDate() + 1;
    day < 10 && (day = `0${day}`);
    setTomorrow(`${year}-${month}-${day}`);
    setSelectedDate(`${year}-${month}-${day}`);
  }

  useEffect(() => {
    today();
  }, []);

  // Asztal kiválasztása, Modal behívása
  useEffect(() => {
    if (isSelectTable !== 0) {
      setModal(true);
    }
  }, [isSelectTable]);

  // ----- Magasságszámítás

  useEffect(() => {
    let arrayTemp = props.isPageCollector;
    arrayTemp[3] = getHight(".tableBookContainer");
    props.setPageCollector(arrayTemp);
  }, []);

  return (
    <div className="tableBookContainer">
      <div className="tableHead">Asztalfoglalás</div>

      <div className="reserveTimeContainer">
        <div className="dateInputContainer">
          <div className="headRow ">Choose a Day</div>
          <input
            type="date"
            id="dateInput"
            min={isTomorrow}
            value={isSelectedDate ? isSelectedDate : isTomorrow}
            onChange={(e) => {
              const value = e.target.value;
              setSelectedDate(value);
            }}
          />
        </div>

        <div className="startTimeContainer">
          <div className="headRow">Choose Start Time</div>
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
          <div className="headRow">Choose end Time</div>
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
