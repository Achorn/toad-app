import { useToadContext } from "../hooks/useToadContext";
import { useToadGame } from "../hooks/useToadGame";

export const TheToad = () => {
  const { interactWithToad } = useToadGame();
  const { toad } = useToadContext();
  return (
    <div onClick={() => interactWithToad()}>
      <p>Name: {toad.name}</p>
      <p>Fed Count: {toad.water_points}</p>
      <p>Education Count: {toad.education_points}</p>
    </div>
  );
};
