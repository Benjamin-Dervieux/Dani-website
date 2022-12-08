import Typewriter from "typewriter-effect";
import style from "./DisplayName.module.css";

const DisplayName = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.typeName}>
        <Typewriter
          className={style.displayName}
          onInit={(typewriter) => {
            typewriter
              .changeDelay(70)
              .typeString('<span style="color: #FFFFFF;"> Danielle </span>')
              .pauseFor(300)
              .typeString('<span style="color: #FFFFFF;"> Desteucq </span>')
              .pauseFor(100)
              .typeString('<span style="color: #FFFFFF;"> - </span>')
              .pauseFor(300)
              .typeString('<span style="color: #FFFFFF;"> Roettger </span>')
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default DisplayName;
