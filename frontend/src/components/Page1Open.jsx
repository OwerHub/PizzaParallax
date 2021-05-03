import parallaxPercent from "../utils/parallaxPercent";
import SvgHead from "./AnimateText";

function pageOpen(props) {
  let minScroll = 1;
  let maxScroll = window.innerHeight;
  let minValue = 0;
  let maxValue = window.innerWidth;
  let move = parallaxPercent(props.offset, minScroll, maxScroll, minValue, maxValue);

  let nameConteinerStyle = {
    /* top: `${window.innerHeight / 2}px`, */
    /* transform: `translate(${move}px , ${-0.3 * move}px)`, */
    transform: `scale(${parallaxPercent(
      props.offset,
      minScroll,
      window.innerHeight / 2,
      1,
      25
    )})`,

    opacity: `${
      parallaxPercent(props.offset, minScroll, window.innerHeight / 2, 100, 0) / 100
    }`,

    filter: `blur(${parallaxPercent(
      props.offset,
      minScroll,
      window.innerHeight / 2,
      0,
      10
    )}px)`,
  };

  let coverBlackStyle = {};

  return (
    <div className="pizzaPic flexCenter">
      <div className="nameContainer flexCenter" style={nameConteinerStyle}>
        <span>Neta - Pizza </span>z`
        {/*   <SvgHead></SvgHead> */}
      </div>
    </div>
  );
}

export default pageOpen;
