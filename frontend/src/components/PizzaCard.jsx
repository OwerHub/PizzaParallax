function PizzaCard(props) {
  return (
    <div className="pizzaCardContainer">
      <div className="pizzaName">{props.data.name}</div>
      <div className="pizzaToppings">
        {props.data.topping.map((topping, iterator) => (
          <span key={iterator}> {topping},</span>
        ))}
      </div>
      <div className="pizzaPrices">
        <div className="smallPrice price">22cm: {props.data.price.small}</div>
        <div className="midPrice price">30cm: {props.data.price.medium}</div>
        <div className="bigPrice price">45cm: {props.data.price.big}</div>
      </div>
    </div>
  );
}

export default PizzaCard;
