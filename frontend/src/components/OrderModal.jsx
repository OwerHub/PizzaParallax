import React, { useState, useEffect } from "react";

function OrderModal(props) {
  const [isValid, setValid] = useState(false);

  const [isMailVal, setMailVal] = useState("");
  const [isNameVal, setNameVal] = useState("");
  const [isPhoneVal, setPhoneVal] = useState("");

  // validate

  useEffect(() => {
    function emailValidate(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
    function numberValidate(phone) {
      return /*  /^[0d-9]+$/.test(phone) && */ phone.length > 8;
    }
    function nameValidate(name) {
      return name.length > 5;
    }

    setValid(
      emailValidate(isMailVal) &&
        numberValidate(isPhoneVal) &&
        nameValidate(isNameVal)
    );
  }, [isMailVal, isNameVal, isPhoneVal]);

  // Close the Modal
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
      name: isNameVal,
      mail: isMailVal,
      phone: isPhoneVal,
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
      {/* <div>i am a carousel</div>
      <div>You select a {props.table} table</div>
      <div>You selected a ${props.date} date</div> */}

      <form action="something" className="modalForm">
        <input
          type="text"
          className="nameInput"
          placeholder="name"
          onChange={(e) => {
            const value = e.target.value;
            setNameVal(value);
          }}
        />
        <input
          type="email"
          className="emailInput"
          placeholder="mail"
          required
          onChange={(e) => {
            const value = e.target.value;
            setMailVal(value);
          }}
        />
        <input
          type="tel"
          className="phoneInput"
          placeholder="0630123123"
          required
          onChange={(e) => {
            const value = e.target.value;
            setPhoneVal(value);
          }}
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
