import { welcomeText } from "../temp/tempdatas";
import parallaxPercent from "../utils/parallaxPercent";

function PageIntro(props) {
  let minScroll = 1;
  let maxScroll = window.innerHeight * 2;
  let minValue = window.innerWidth * -1;
  let maxValue = window.innerWidth;
  let move = parallaxPercent(props.offset, minScroll, maxScroll, minValue, maxValue);

  let styleIntroText = {
    transform: `translateX(${move}px)`,
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
