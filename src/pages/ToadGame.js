import { useEffect } from "react";
import { useToadContext } from "../context/toadContext";

export const ToadGame = () => {
  const { toad, setToad } = useToadContext();

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
      {toad && <p>Toad name: {toad.name}</p>}
    </div>
  );
};
