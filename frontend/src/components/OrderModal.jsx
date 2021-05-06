import React, { useState, useEffect } from "react";

function OrderModal(props) {
  const [isValid, setValid] = useState(false);
  const [isMailVal, setMailVal] = useState("");

  // validate
  function emailValidate(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function numberValidate(phone) {
    return /*  /^[0d-9]+$/.test(phone) && */ phone.length > 8;
  }

  function nameValidate(name) {
    return name.length > 5;
  }

  function validateFunct() {
    let mailVal = document.querySelector(".emailInput").value;
    let nameVal = document.querySelector(".nameInput").value;
    let phoneVal = document.querySelector(".phoneInput").value;

    setValid(
      emailValidate(mailVal) && numberValidate(phoneVal) && nameValidate(nameVal)
    );
  }

  //
  function closeCarousel() {
    props.close();
    props.setTable();
  }

  //
  function makeDateArray() {
    let outArray = [];
    props.date.forEach((element) => {
      outArray.push(`${element}-${props.table}`);
    });
    return outArray;
  }

  //
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

    fetch("http://localhost:8000/tableReserve", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendData),
    })
      .then((res) => res.text())
      .then((res) => console.log(res));

    console.log(sendData);
  };

  return (
    <div className="modalOut">
      <div>i am a carousel</div>
      <div>You select a {props.table} table</div>
      <div>You selected a ${props.date} date</div>

      <form action="something" className="modalForm">
        <input
          type="text"
          className="nameInput"
          placeholder="name"
          onChange={() => validateFunct()}
        />
        <input
          type="email"
          className="emailInput"
          placeholder="mail"
          required
          onChange={() => validateFunct()}
        />
        <input
          type="tel"
          className="phoneInput"
          placeholder="0630123123"
          required
          onChange={() => validateFunct()}
        />
        <button type="submit" onClick={submitFetch} disabled={!isValid}>
          Submit
        </button>
      </form>

      <button onClick={() => closeCarousel()}>close</button>
    </div>
  );
}

export default OrderModal;
