import { createContext, useContext } from "react";

export const ToadContext = createContext();

//custom react component that holds context state. less inports through app use context AND toad context

export const useToadContext = () => {
  const context = useContext(ToadContext);
  if (!context)
    throw Error("useToadContext must be used within a ToadContextProvider");
  return context;
};

// custom wrapper that holds custom component that holds state

// export both i guess

// export const  ToadContextProvider = () =>{
//   return
// }
