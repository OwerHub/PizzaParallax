import { pizzaList } from "../temp/tempdatas";
import PizzaCard from "./PizzaCard";

function PizzaList(props) {
  return (
    <div className="pizzaListContainer">
      <div className="pizzaListHead">a</div>
      <div className="pizzaCards">
        {pizzaList.map((data, iterator) => (
          <PizzaCard key={iterator} data={data}></PizzaCard>
        ))}
      </div>
    </div>
  );
}

export default PizzaList;
