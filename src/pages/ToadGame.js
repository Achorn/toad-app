import { useEffect } from "react";
import { useToadContext } from "../context/ToadContext";
import { TheToad } from "../components/TheToad";
import { EducateButton } from "../components/buttons/EducateButton";
import { FeedButton } from "../components/buttons/FeedButton";
import { useGameContext } from "../context/GameContext";

export const ToadGame = () => {
  const { toad, setToad } = useToadContext();
  const { game } = useGameContext();
  useEffect(() => {
    //fetch Jimmothy the toad
    fetch("https://toad-api.onrender.com/api/toads/65b56086262ce654b7b3de6f")
      .then((res) => res.json())
      .then((data) => setToad(data))
      .catch((err) => console.log(err.message));
  }, [setToad]);
  return (
    <div>
      <h1>Toad Page</h1>
      {game && <p>Game: {game.name}</p>}
      {toad && <TheToad />}
      <FeedButton />
      <EducateButton />
    </div>
  );
};
