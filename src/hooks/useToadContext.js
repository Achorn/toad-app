import { useContext } from "react";
import { ToadContext } from "../context/ToadContext";

export const useToadContext = () => {
  const context = useContext(ToadContext);
  if (!context)
    throw Error("useToadContext must be used within a ToadContextProvider");
  return context;
};
