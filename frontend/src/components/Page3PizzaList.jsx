import React, { useState, useEffect } from "react";
import { pizzaList } from "../temp/tempdatas";
import PizzaCard from "./PizzaCard";
import ParaHead from "./ParallaxHead";
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
    setContLoad(!isContLoad);
  }

  return (
    <div className="pizzaListContainer" onLoad={() => loadFunc()}>
      {/* <div className="pizzaListHead">Pizzáink</div> */}

      <ParaHead
        offset={props.offset}
        offsetStart={props.isPageCollector[0] + props.isPageCollector[1]}
        offsetEnd={
          props.isPageCollector[0] +
          props.isPageCollector[1] +
          window.innerHeight * 2
        }
        multiplyStart={1}
        multiplyEnd={-3}
        text="Pizzáink"
        isPower={props.isPower}
      ></ParaHead>

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
