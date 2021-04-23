function pageOpen(props) {
  let nameConteinerStyle = {
    /* top: `${window.innerHeight / 2}px`, */
    transform: `translateX(${
      (props.offset / window.innerHeight) * window.innerWidth
    }px)`,
  };

  return (
    <div className="pizzaPic flexCenter">
      <div className="nameContainer flexCenter" style={nameConteinerStyle}>
        <span>Family Pizzeria</span>
      </div>
    </div>
  );
}

export default pageOpen;
