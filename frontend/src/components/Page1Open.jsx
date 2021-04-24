import parallaxPercent from "../utils/parallaxPercent";

function pageOpen(props) {
  let minScroll = 1;
  let maxScroll = window.innerHeight;
  let minValue = 0;
  let maxValue = window.innerWidth;
  let move = parallaxPercent(props.offset, minScroll, maxScroll, minValue, maxValue);

  let nameConteinerStyle = {
    /* top: `${window.innerHeight / 2}px`, */
    transform: `translate(${move}px , ${-0.3 * move}px)`,
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
