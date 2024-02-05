import { useToadContext } from "../hooks/useToadContext";

export const TheToad = () => {
  const { toad } = useToadContext();
  return (
    <div>
      <p>Name: {toad.name}</p>
      <p>Fed Count: {toad.water_points}</p>
      <p>Education Count: {toad.education_points}</p>
    </div>
  );
};
