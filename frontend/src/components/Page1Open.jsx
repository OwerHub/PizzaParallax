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
      10
    )})`,

    opacity: `${
      parallaxPercent(props.offset, minScroll, window.innerHeight / 2, 100, 0) / 100
    }`,

    filter: `blur(${parallaxPercent(
      props.offset,
      minScroll,
      window.innerHeight / 2,
      0,
      8
    )}px)`,
  };

  /* let try = parallaxPercent(porps.offset, innerHeight * 0.4, maxScroll, 0, 100); */

  let pizzaStyle = {
    transform: `translateY(${parallaxPercent(
      props.offset,
      minScroll,
      window.innerHeight,
      0,
      window.innerHeight * 0.2
    )}px)`,
  };

  let bgStyle = {
    backgroundColor: `rgba(0,0,0,${
      parallaxPercent(
        props.offset,
        window.innerHeight * 0.4,
        maxScroll * 0.8,
        0,
        100
      ) / 100
    })`,
  };

  return (
    <div className="backgroundPic flexCenter">
      <div className="mainBgColor" style={bgStyle}></div>
      <div className="pizzaPic" style={pizzaStyle}></div>
      <div className="nameContainer flexCenter" style={nameConteinerStyle}>
        <div>Parallax</div>
        <div>Pizza</div>
        {/*   <SvgHead></SvgHead> */}
      </div>
    </div>
  );
}

export default pageOpen;
