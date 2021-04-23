import "../styles/dist/firstcont.css";
import React, { useState, useEffect } from "react";

import { welcomeText } from "../temp/tempdatas";

function FirstCont() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let screenHeight = window.innerHeight;

  console.log(
    `height: ${window.innerHeight} , offset = ${offset}  elosztás= ${
      offset / window.innerHeight
    }`
  );

  let nameConteinerStyle = {
    /* top: `${window.innerHeight / 2}px`, */
    transform: `translateX(${(offset / window.innerHeight) * window.innerWidth}px)`,
  };

  let styleIntroText = {
    transform: `translateX(${
      -1 * window.innerWidth + (offset / window.innerHeight) * window.innerWidth
    }px)`,
  };

  return (
    <div>
      <div className="pizzaPic flexCenter">
        <div className="nameContainer flexCenter" style={nameConteinerStyle}>
          <span>Family Pizzeria</span>
        </div>
      </div>

      <div className="introduction">
        <div className="descriptionContainer flexCenter" style={styleIntroText}>
          <p>{welcomeText}</p>
        </div>
      </div>

      <div className="pizzas"></div>
    </div>
  );
}

export default FirstCont;
