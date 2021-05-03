import "../styles/mainCont.css";
import React, { useState, useEffect } from "react";

import PageOpen from "./Page1Open";
import PageIntro from "./Page2Introduct";
import PizzaList from "./Page3PizzaList";

import parallaxPercent from "../utils/parallaxPercent";

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
  /* 
  let minScroll = 1;
  let maxScroll = 860;
  let minValue = 0;
  let maxValue = -200; */

  /*   let a = parallaxPercent(
    Math.round(offset),
    minScroll,
    maxScroll,
    minValue,
    maxValue
  ); */

  /*   let log = {
    offset: Math.round(offset),
    solution: a,
    minScroll: minScroll,
    maxScroll: maxScroll,
    minValue: minValue,
    maxValue: maxValue,
  };

  console.table(log); */

  return (
    <div>
      <PageOpen offset={offset}></PageOpen>

      <PageIntro offset={offset}></PageIntro>

      <PizzaList></PizzaList>

      <div className="pizzas"></div>
    </div>
  );
}

export default FirstCont;
