// import { useState } from "react";
import { useToadContext } from "../hooks/useToadContext";
import { useToadGame } from "../hooks/useToadGame";
import { TheToad } from "./TheToad";
import { DeleteToad } from "./buttons/DeleteToad";
import { EducateButton } from "./buttons/EducateButton";
import { FeedButton } from "./buttons/FeedButton";
// import { useToadContext } from "../hooks/useToadContext";

export const ToadGame = () => {
  const { error } = useToadContext();

  return (
    <div>
      <TheToad />
      <div>
        <EducateButton />
        <FeedButton />
      </div>
      {error && <div className="error">{error}</div>}
      <DeleteToad />
    </div>
  );
};
