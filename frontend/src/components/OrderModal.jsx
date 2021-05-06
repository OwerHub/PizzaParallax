import React, { useState, useEffect } from "react";

function OrderModal(props) {
  const [isvalid, setValid] = useState(false);

  //
  function closeCarousel() {
    props.close();
    props.setTable();
  }

  function makeDateArray() {
    let outArray = [];
    props.date.forEach((element) => {
      outArray.push(`${element}-${props.table}`);
    });
    return outArray;
  }

  const submitFetch = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("in fetchFunct");

    let sendData = {
      name: document.querySelector(".nameInput").value,
      mail: document.querySelector(".emailInput").value,
      phone: document.querySelector(".phoneInput").value,
      reserve: makeDateArray(),
    };

    const postHead = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendData),
    };

    console.log(sendData);
  };

  return (
    <div className="modalOut">
      <div>i am a carousel</div>
      <div>You select a {props.table} table</div>
      <div>You selected a ${props.date} date</div>

      <form action="something" className="modalForm">
        <input type="text" className="nameInput" placeholder="name" />
        <input type="email" className="emailInput" placeholder="mail" required />
        <input
          type="tel"
          className="phoneInput"
          placeholder="30-123-45-67"
          pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          required
        />
        <button type="submit" onClick={submitFetch}>
          Submit
        </button>
      </form>

      <button onClick={() => closeCarousel()}>close</button>
    </div>
  );
}

export default OrderModal;
