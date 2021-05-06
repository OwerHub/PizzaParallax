import React, { useState, useEffect } from "react";

function TableDraws(props) {
  /*  function bgAvilable() {
    if (props.avilable[props.tableNr - 1] === "0") {
      return "red";
    } else {
      return "green";
    }
  } */

  function avilableCHeck() {
    if (props.avilable[props.tableNr - 1] === "0") {
      return false;
    } else {
      return true;
    }
  }

  function clickNumber() {
    props.setTableNr(props.tableNr);
    console.log("clicked");
  }

  const avilableStyle = {
    cursor: "pointer",
  };

  const notAvilableStyle = {};

  return (
    <div className="tabDiv" onClick={() => clickNumber()}>
      <div className="svgContainer">
        <h4>Table {props.tableNr}</h4>
        <svg
          id="table"
          data-name="Capa 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 421.4 421.4"
          fill={avilableCHeck() ? "green" : "red"}
        >
          <g>
            <path d="M148,223.37H106.57l-2.52,22h33v22.5H101.48l-2.51,22h38v33.5a11,11,0,0,0,22,0v-89A11,11,0,0,0,148,223.37Z" />
            <path d="M43.21,245.37H68.83l2.51-22H43Q42,199.67,38.4,173.6c-6.3-45.11-16.46-78.11-16.89-79.49a11,11,0,0,0-21,6.53c.4,1.28,39.58,129.62,9.09,219.19a11,11,0,1,0,20.83,7.09,227,227,0,0,0,9-37H63.74l2.51-22H42.12C42.73,260.6,43.08,253.09,43.21,245.37Z" />
            <path d="M413.66,86.87a11,11,0,0,0-13.77,7.24c-.43,1.38-10.59,34.37-16.89,79.49q-3.63,26.06-4.55,49.77H350.06l2.52,22h25.61c.13,7.72.48,15.22,1.09,22.5H355.15l2.51,22h24.27A228.41,228.41,0,0,0,391,326.92a11,11,0,1,0,20.83-7.09c-30.43-89.38,8.64-217.72,9.09-219.19A11,11,0,0,0,413.66,86.87Z" />
            <path d="M284.4,267.87v-22.5h33l-2.52-22H273.4a11,11,0,0,0-11,11v89a11,11,0,0,0,22,0v-33.5h38l-2.51-22Z" />
            <path d="M336.59,162.73h8.61a17,17,0,0,0,0-34H76.2a17,17,0,0,0,0,34h8.61l-18.29,160a11,11,0,0,0,21.86,2.5L107,162.73H314.44L333,325.28A11,11,0,0,0,343.94,335a10.76,10.76,0,0,0,1.26-.07,11,11,0,0,0,9.68-12.18Z" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default TableDraws;
