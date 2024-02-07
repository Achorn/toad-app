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
  const [interaction, setInteraction] = useState();
  const [error, setError] = useState();

  return (
    <GameContext.Provider
      value={{ interaction, setInteraction, error, setError }}
    >
      {children}
    </GameContext.Provider>
  );
};
