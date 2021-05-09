import "../styles/mainCont.css";
import React, { useState, useEffect } from "react";

import PageOpen from "./Page1Open";
import PageIntro from "./Page2Introduct";
import PizzaList from "./Page3PizzaList";
import Tables from "./Page4TableBook";

import parallaxPercent from "../utils/parallaxPercent";

function FirstCont() {
  // fakebackend - olyan bemutatófelületeken, ahol nem tudunk server-t indítani, helyi adathalmazt kap
  // false - adatok backendről , true -  adatok utils/-ból
  let fakeBackend = false;

  const [offset, setOffset] = useState(0);

  const [isPageNr, setPageNr] = useState(0);
  const [isPageCollector, setPageCollector] = useState([0, 0, 0, 0]);

  useEffect(() => {
    let point1 = isPageCollector[0];
    let point2 = isPageCollector[0] + isPageCollector[1];
    let point3 = isPageCollector[0] + isPageCollector[1] + isPageCollector[2];
    /* 
    console.log(point1, point2, point3);
    console.log(isPageCollector[2]); */

    if (offset < isPageCollector[0]) {
      setPageNr(1);
    }
    if (offset > isPageCollector[0] && offset < point2) {
      setPageNr(2);
    }
    if (offset > point2 && offset < point3) {
      setPageNr(3);
    }
    if (offset > point3) {
      setPageNr(4);
    }
  }, [offset]);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset.toFixed(2));
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  /*  console.log("isPageCollector is" + isPageCollector); */
  /* console.log("offset" + offset); */
  return (
    <div>
      <div className="main-background"></div>
      <div className="mainHead">pagenr is {isPageNr}</div>
      <div className="scrolledDiv">
        <PageOpen
          offset={offset}
          fakeBackend={fakeBackend}
          setPageCollector={setPageCollector}
          isPageCollector={isPageCollector}
        ></PageOpen>
        <PageIntro
          offset={offset}
          fakeBackend={fakeBackend}
          setPageCollector={setPageCollector}
          isPageCollector={isPageCollector}
        ></PageIntro>
        <PizzaList
          fakeBackend={fakeBackend}
          setPageCollector={setPageCollector}
          isPageCollector={isPageCollector}
        ></PizzaList>
        <Tables
          offset={offset}
          fakeBackend={fakeBackend}
          setPageCollector={setPageCollector}
          isPageCollector={isPageCollector}
        ></Tables>
      </div>

      <div className="pizzas"></div>
    </div>
  );
}

export default FirstCont;
