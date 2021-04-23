import { welcomeText } from "../temp/tempdatas";

function PageIntro(props) {
  let styleIntroText = {
    transform: `translateX(${
      -1 * window.innerWidth +
      (props.offset / window.innerHeight) * window.innerWidth
    }px)`,
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
