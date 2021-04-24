import { welcomeText } from "../temp/tempdatas";
import parallaxPercent from "../utils/parallaxPercent";

function PageIntro(props) {
  let minScroll = 1;
  let maxScroll = window.innerHeight;
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
    )})`,

    opacity: `${
      parallaxPercent(props.offset, window.innerHeight / 2, maxScroll, 0, 100) / 100
    }`,
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
