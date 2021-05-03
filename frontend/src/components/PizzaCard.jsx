function PizzaCard(props) {
  let toppings = "";
  toppings = toppings.concat(
    props.data.topping.map((data) => {
      return data;
    })
  );

  let readNote = document.querySelector(".pizzaCardContainer");
  console.log(`key: ${props.data.name}`);
  console.log(readNote.offsetTop);

  return (
    <div className="pizzaCardContainer">
      <div className="pizzaName">{props.data.name}</div>
      <div className="pizzaTop">{toppings}</div>
      <div className="PizzaPrices">
        <div className="smallPrice">22cm: {props.data.price.small}</div>
        <div className="midPrice">30cm: {props.data.price.medium}</div>
        <div className="bigPrice">45cm: {props.data.price.big}</div>
      </div>
    </div>
  );
}

export default PizzaCard;
