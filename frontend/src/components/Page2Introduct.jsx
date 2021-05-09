import { welcomeText } from "../temp/tempdatas";
import parallaxPercent from "../utils/parallaxPercent";
import React, { useState, useEffect } from "react";

import getHight from "../utils/getHeight";

function PageIntro(props) {
  /*   let minScroll = 1; */
  /*   let minValue = window.innerWidth * -1;
  let maxValue = window.innerWidth; */
  /*  let move = parallaxPercent(props.offset, minScroll, maxScroll, minValue, maxValue); */

  let maxScroll = window.innerHeight * 0.8;

  const [isTextHeight, setTextHeight] = useState(100);
  const [isFontSize, setFontSize] = useState(130);

  let styleIntroText = {
    transform: `scale(${parallaxPercent(
      props.offset,
      window.innerHeight / 2,
      maxScroll,
      25,
      1
    )})
   /*  translateY( ${parallaxPercent(
     props.offset,
     window.innerHeight * 1.0 * 0.8,
     window.innerHeight * 2.0,
     0 - 200,
     window.innerHeight * 1.2 - 200
   )}px ) */  `,

    opacity: `${
      parallaxPercent(props.offset, window.innerHeight / 2, maxScroll, 0, 100) / 100
    }`,

    filter: `blur(${parallaxPercent(
      props.offset,
      window.innerHeight / 2,
      maxScroll,
      10,
      0
    )}px)`,
  };

  // kis saját megírt Media Query (tudom hogy SASS-al is lehet)
  useEffect(() => {
    let width = window.innerWidth;
    let calcedHeight = 100;
    if (width < 600) {
      let overflw = 600 - width;
      calcedHeight = calcedHeight * 1.2 + overflw * 0.15;
    }
    setTextHeight(calcedHeight);

    if (width > 1100) {
      let sizeOver = (width - 900) / 1000 + 1;
      console.log("sizeOver" + sizeOver);
      setFontSize(isFontSize * sizeOver);
    }
  }, []);

  const textContainerStyle = {
    height: `${isTextHeight}vh`,
  };

  const paragraphStyle = {
    fontSize: `${isFontSize}%`,
    width: "80%",
  };

  useEffect(() => {
    let arrayTemp = props.isPageCollector;
    arrayTemp[1] = getHight(".introduction");
    props.setPageCollector(arrayTemp);
  }, []);

  return (
    <div className="introduction" style={textContainerStyle}>
      <div className="descriptionContainer flexCenter" style={styleIntroText}>
        <p style={paragraphStyle}>{welcomeText}</p>
      </div>
    </div>
  );
}

export default PageIntro;
