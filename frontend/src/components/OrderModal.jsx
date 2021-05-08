import React, { useState, useEffect } from "react";
import LoadAnimation from "./LoadingAnimation";
import SucessModal from "./SucessFullModal";

function OrderModal(props) {
  const [isValid, setValid] = useState(false);

  const [isMailVal, setMailVal] = useState("");
  const [isNameVal, setNameVal] = useState("");
  const [isPhoneVal, setPhoneVal] = useState("");

  const [isLoading, setLoading] = useState(false);
  const [isDone, setDone] = useState(false);

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
  function closeModal() {
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

  //-----Closing protokol
  function closeProtokol() {
    setLoading(false);
    setDone(true);

    setTimeout(() => {
      setDone(false);
      closeModal();
    }, 3000);
  }

  //----------------  Sumbit
  const submitFetch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);

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
      .then((res) => console.log(res))
      .finally(() => {
        closeProtokol();
      });

    console.log(sendData);
  };

  return (
    <div className="modalContainer">
      {isLoading ? (
        <LoadAnimation></LoadAnimation>
      ) : isDone ? (
        <SucessModal></SucessModal>
      ) : (
        <div className="modalOut">
          <div className="pictureDiv"></div>
          <div className="modalInputDiv">
            <h3>Asztalfoglalás</h3>
            <form action="something">
              <div class="form__group field">
                <input
                  type="text"
                  className="nameInput form__field"
                  placeholder="name"
                  id="name"
                  required
                  onChange={(e) => {
                    const value = e.target.value;
                    setNameVal(value);
                  }}
                />
                <label htmlFor="name" class="form__label">
                  name
                </label>
              </div>

              <div class="form__group field">
                <input
                  type="email"
                  className="emailInput form__field"
                  placeholder="mail"
                  id="mail"
                  required
                  onChange={(e) => {
                    const value = e.target.value;
                    setMailVal(value);
                  }}
                />
                <label htmlFor="mail" class="form__label">
                  mail
                </label>
              </div>

              <div class="form__group field">
                <input
                  type="tel"
                  className="phoneInput form__field"
                  placeholder="0630123123"
                  id="phone"
                  required
                  onChange={(e) => {
                    const value = e.target.value;
                    setPhoneVal(value);
                  }}
                />

                <label htmlFor="phone" class="form__label">
                  phone
                </label>
              </div>

              <button type="submit" onClick={submitFetch} disabled={!isValid}>
                Submit
              </button>
              <button className="modalCloseButton" onClick={() => closeModal()}>
                X
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderModal;
