import { welcomeText } from "../temp/tempdatas";
import parallaxPercent from "../utils/parallaxPercent";

function PageIntro(props) {
  let minScroll = 1;
  let maxScroll = window.innerHeight * 0.8;
  let minValue = window.innerWidth * -1;
  let maxValue = window.innerWidth;
  let move = parallaxPercent(props.offset, minScroll, maxScroll, minValue, maxValue);

  /* let styleIntroText = {
    transform: `translateX(${move}px)`,
  }; */

  let styleIntroText = {
    transform: `scale(${parallaxPercent(
      props.offset,
      window.innerHeight / 2,
      maxScroll,
      25,
      1
    )})
    translate(0px , ${parallaxPercent(
      props.offset,
      window.innerHeight * 1.0,
      window.innerHeight * 2.0,
      0 - 200,
      window.innerHeight * 1 - 200
    )}px )  `,

    opacity: `${
      parallaxPercent(props.offset, window.innerHeight / 2, maxScroll, 0, 100) / 100
    }`,

    filter: `blur(${parallaxPercent(
      props.offset,
      window.innerHeight / 2,
      maxScroll,
      10,
      0
    )}px)`,
  };

  return (
    <div className="introduction">
      <div className="descriptionContainer flexCenter" style={styleIntroText}>
        <p>{welcomeText}</p>
      </div>
    </div>
  );
}

export default PageIntro;
