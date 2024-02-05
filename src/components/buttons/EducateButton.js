import { useToadGame } from "../../hooks/useToadGame";

export const EducateButton = () => {
  const { handleSetInteraction } = useToadGame();
  return (
    <button
      onClick={() => handleSetInteraction("EDUCATE")}
      className="material-symbols-rounded"
    >
      menu_book
    </button>
  );
};
