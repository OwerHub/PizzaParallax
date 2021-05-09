import React, { useState, useEffect } from "react";
import { pizzaList } from "../temp/tempdatas";
import PizzaCard from "./PizzaCard";

import getHight from "../utils/getHeight";

function PizzaList(props) {
  const [isPizzaList, setPizzaList] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isContLoad, setContLoad] = useState(false);

  function fetchPizza() {
    /* console.log("fetchPizzaFunc On "); */
    let url = "http://localhost:8000/pizzalist";

    fetch(url)
      .then((response) => response.json().then((data) => setPizzaList(data)))
      .finally(() => setLoading(false));
  }

  /*  console.table(isPizzaList); */

  useEffect(() => {
    if (!props.fakeBackend) {
      fetchPizza();
    } else {
      setPizzaList(pizzaList);
    }
  }, []);

  useEffect(() => {
    // a settimeOut átmeneti megoldás, le kell ellenőrizni,hogy betöltődtek- e a kártyák?
    setTimeout(() => {
      let arrayTemp = props.isPageCollector;
      console.log(
        `pizzaCards: ${getHight(".pizzaCards")}   head:  ${getHight(
          ".pizzaListHead"
        )}`
      );
      arrayTemp[2] = getHight(".pizzaListContainer");
      props.setPageCollector(arrayTemp);
    }, 1200);
  }, [isLoading, isContLoad]);

  function loadFunc() {
    console.log("onload");
    setContLoad(!isContLoad);
  }

  return (
    <div className="pizzaListContainer" onLoad={() => loadFunc()}>
      <div className="pizzaListHead">Pizzáink</div>
      <div className="pizzaCards">
        {Array.isArray(isPizzaList) &&
          isPizzaList.map((data, iterator) => (
            <PizzaCard key={iterator} data={data}></PizzaCard>
          ))}
      </div>
    </div>
  );
}

export default PizzaList;
