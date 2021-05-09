import React, { useState, useEffect } from "react";

function PageHead(props) {
  return (
    <div className="mainCont">
      <div className="mainHead">
        <div className="headCenter">pagenr {props.number}</div>
      </div>
    </div>
  );
}

export default PageHead;
