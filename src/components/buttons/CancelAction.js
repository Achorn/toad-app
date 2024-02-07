import { useToadGame } from "../../hooks/useToadGame";

export const CancelAction = () => {
  const { handleSetInteraction } = useToadGame();

  return (
    <button
      onClick={() => handleSetInteraction(null)}
      className="material-symbols-rounded"
    >
      close
    </button>
  );
};
