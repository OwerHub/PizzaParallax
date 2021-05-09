import React, { useState, useEffect } from "react";
import Conatcticon from "../img/contact-3018.svg";

let headers = ["Üdvözlünk", "Rólunk", "Pizzáink", "Asztalfoglalás"];

function PageHead(props) {
  const [isContact, setContact] = useState(true);

  let contactStyle = {};

  if (isContact) {
    contactStyle = { transform: "translateY(7vh) " };
  } else {
    contactStyle = { transform: "translateY(-3vh)" };
  }

  let bannerStyle = {
    transform: `translateX(-${(props.number - 1) * 250}px) `,
  };

  function hideContact() {
    console.log("kontakt");
    setContact(!isContact);
  }

  return (
    <div className="mainCont">
      <div className="mainNameWrapper">
        <div className="mainHead">
          <div className="contactButton" onClick={() => hideContact()}>
            <img src={Conatcticon} alt="React Logo" height="30px" />
          </div>
          <div className="headCenter">
            <div className="scrollBanner" style={bannerStyle}>
              {headers.map((data, iterator) => (
                <div key={iterator}>{data} </div>
              ))}
            </div>
          </div>
          <div className="contactButton" style={{ color: "black" }}>
            kap
          </div>
        </div>
        <div className="contactsHead" style={contactStyle}>
          <span>Cím: Budapest, Rutyakötyöge 4</span>
          <span>Telefonszám: 555-45-54</span>
          <span>mail: sdaw3dwad@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default PageHead;
