import { useToadGame } from "../../hooks/useToadGame";

export const FeedButton = () => {
  const { handleSetInteraction } = useToadGame();

  return (
    <button
      onClick={() => handleSetInteraction("FEED")}
      className="material-symbols-rounded"
    >
      water_drop
    </button>
  );
};
