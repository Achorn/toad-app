import { useGameContext } from "../context/GameContext";
import { TheToad } from "./TheToad";
// import { DeleteToad } from "./buttons/DeleteToad";
import { EducateButton } from "./buttons/EducateButton";
import { FeedButton } from "./buttons/FeedButton";
import "../components/buttons/button.css";
import { CancelAction } from "./buttons/CancelAction";
import { CursorImage } from "./cursorImage/CursorImage";

export const ToadGame = () => {
  const { error } = useGameContext();

  return (
    <div className="toadGame">
      <CursorImage />
      <TheToad />
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
