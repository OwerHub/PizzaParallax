import React, { useState, useEffect } from "react";
import { pizzaList } from "../temp/tempdatas";
import PizzaCard from "./PizzaCard";

function PizzaList(props) {
  const [isPizzaList, setPizzaList] = useState("");
  const [isLoading, setLoading] = useState(false);

  function fetchPizza() {
    console.log("fetchPizzaFunc On ");
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

  return (
    <div className="pizzaListContainer">
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
