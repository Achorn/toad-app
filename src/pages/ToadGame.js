import { useToadContext } from "../context/toadContext";

export const ToadGame = () => {
  const { toad } = useToadContext();
  return (
    <div>
      <h1>Toad Page</h1>
      <p>Toad name: {toad.name}</p>
    </div>
  );
};
