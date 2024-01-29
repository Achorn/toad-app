import { createContext, useContext, useState } from "react";
//create context
const GameContext = new createContext();

// create state
export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context)
    throw Error("useToadContext must be used within a ToadContextProvider");
  return context;
};
// create provider
export const GameProvider = ({ children }) => {
  const [game, setGame] = useState({ name: "random name" });

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
};
