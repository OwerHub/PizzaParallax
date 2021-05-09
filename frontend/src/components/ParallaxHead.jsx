import parallaxPercent from "../utils/parallaxPercent";
import React, { useState, useEffect } from "react";

function ParallaxHead(props) {
  let width = window.innerWidth;
  let height = window.innerHeight;

  console.table(props);

  let style1 = {
    transform: `translate(${parallaxPercent(
      props.offset,
      props.offsetStart,
      props.offsetEnd,
      width * props.multiplyStart,
      width * props.multiplyEnd
    )}px  )`,
  };

  return (
    <div className="parallaxHeadCont">
      <div className="pHeadInnerDiv">
        <div className="pHeadText1" style={style1}>
          {props.text}
        </div>
        {/* 	<div className="pHeadText2">szöveg</div> */}
      </div>
    </div>
  );
}

export default ParallaxHead;
