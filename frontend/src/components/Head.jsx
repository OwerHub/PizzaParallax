import React, { useState, useEffect } from "react";

let headers = ["Üdvözlünk", "Rólunk", "Pizzáink", "Asztalfoglalás"];

function PageHead(props) {
  let bannerStyle = {
    transform: `translateX(-${(props.number - 1) * 10}vw)`,
  };

  return (
    <div className="mainCont">
      <div className="mainHead">
        <div className="headCenter">
          <div className="scrollBanner" style={bannerStyle}>
            {headers.map((data, iterator) => (
              <div key={iterator}>{data} </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHead;
