import { useGameContext } from "../context/GameContext";
import { TheToad } from "./theToad/TheToad";
// import { DeleteToad } from "./buttons/DeleteToad";
import { EducateButton } from "./buttons/EducateButton";
import { FeedButton } from "./buttons/FeedButton";
import "../components/buttons/button.css";
import { CancelAction } from "./buttons/CancelAction";
import { CursorImage } from "./cursorImage/CursorImage";
import "./toadGame.css";
import { ToadStatus } from "./toadStatus/ToadStatus";
export const ToadGame = () => {
  const { error } = useGameContext();

  return (
    <div id="toadGame">
      <TheToad />
      <CursorImage />
      <ToadStatus />
      <div className="buttonsRow">
        <FeedButton />
        <EducateButton />
        <CancelAction />
      </div>
      {error && <div className="error">{error}</div>}
      {/* <DeleteToad /> */}
    </div>
  );
};
