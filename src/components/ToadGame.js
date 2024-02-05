// import { useState } from "react";
import { useGameContext } from "../context/GameContext";
// import { useToadContext } from "../hooks/useToadContext";
// import { useToadGame } from "../hooks/useToadGame";
import { TheToad } from "./TheToad";
import { DeleteToad } from "./buttons/DeleteToad";
import { EducateButton } from "./buttons/EducateButton";
import { FeedButton } from "./buttons/FeedButton";
// import { useToadContext } from "../hooks/useToadContext";

export const ToadGame = () => {
  const { error } = useGameContext();

  return (
    <div>
      <TheToad />
      <div>
        <FeedButton />
        <EducateButton />
      </div>
      {error && <div className="error">{error}</div>}
      <DeleteToad />
    </div>
  );
};
