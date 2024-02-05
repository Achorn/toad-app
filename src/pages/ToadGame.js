import { useEffect } from "react";
import { TheToad } from "../components/TheToad";
import { EducateButton } from "../components/buttons/EducateButton";
import { FeedButton } from "../components/buttons/FeedButton";
import { useGameContext } from "../context/GameContext";
import { UseAuthContext } from "../hooks/useAuthContext";
import { CreateToadForm } from "../components/CreateToadForm";
import { useToadContext } from "../hooks/useToadContext";

export const ToadGame = () => {
  const { user } = UseAuthContext();
  const { toad, setToad } = useToadContext();
  const { game } = useGameContext();
  useEffect(() => {
    //fetch Jimmothy the toad
    fetch("https://toad-api.onrender.com/api/toads/", {
      headers: {
        Authorization: `Bearer: ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setToad(data))
      .catch((err) => console.log(err.message));
  }, [setToad, user]);
  return (
    <div>
      <CreateToadForm />
      {game && <p>Game: {game.name}</p>}
      {toad && <TheToad />}
      <FeedButton />
      <EducateButton />
    </div>
  );
};
