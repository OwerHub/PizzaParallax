import "../styles/dist/firstcont.css";
import React, { useState, useEffect } from "react";

import PageOpen from "./Page1Open";
import PageIntro from "./Page2Introduct";

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

  /*   console.log(
    `height: ${window.innerHeight} , offset = ${offset}  elosztás= ${
      offset / window.innerHeight
    }`
  ); */

  return (
    <div>
      <PageOpen offset={offset}></PageOpen>

      <PageIntro offset={offset}></PageIntro>

      <div className="pizzas"></div>
    </div>
  );
}

export default FirstCont;
