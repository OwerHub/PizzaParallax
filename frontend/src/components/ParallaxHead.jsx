import parallaxPercent from "../utils/parallaxPercent";
import React, { useState, useEffect } from "react";

function ParallaxHead(props) {
  const width = window.innerWidth;

  const [isTranslate, setTranslate] = useState(width * props.multiplyStart);

  useEffect(() => {
    setTranslate(
      parallaxPercent(
        props.offset,
        props.offsetStart,
        props.offsetEnd,
        width * props.multiplyStart,
        width * props.multiplyEnd
      ) * props.isPower
    );
  }, [props.offset]);

  let style1 = {
    transform: `translateX(${isTranslate}px  )`,
    fontSize: `${props.isPower ? "40vw" : "20vw"}`,
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
