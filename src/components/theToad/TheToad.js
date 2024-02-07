import { useToadGame } from "../../hooks/useToadGame";
import restingToadImg from "../../assets/toad/toad-init-v2.png";
import "./theToad.css";

export const TheToad = () => {
  const { interactWithToad } = useToadGame();
  return (
    <div id="toadContainer" onClick={() => interactWithToad()}>
      <div id="floatBoxContainer">
        <div id="floatBox" className="float">
          <div id="toadDivWrapper" className="spin">
            <img alt="toad_img" className="toadImg" src={restingToadImg} />
          </div>
        </div>
        <div id="shadow"></div>
      </div>
      {/* <p>Name: {toad.name}</p>
      <p>Fed Count: {toad.water_points}</p>
      <p>Education Count: {toad.education_points}</p> */}
    </div>
  );
};
