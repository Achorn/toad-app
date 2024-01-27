import { createContext, useContext, useState } from "react";

export const ToadContext = createContext();

// TODO create custom reducer for detailed toad updates in the future

//custom react component that holds context state. less inports through app use context AND toad context
export const useToadContext = () => {
  const context = useContext(ToadContext);
  if (!context)
    throw Error("useToadContext must be used within a ToadContextProvider");
  return context;
};

// custom Provider that holds that creates own state
export const ToadProvider = ({ children }) => {
  const [toad, setToad] = useState({ name: "Timmothy" });
  return (
    <ToadContext.Provider value={{ toad, setToad }}>
      {children}
    </ToadContext.Provider>
  );
};
