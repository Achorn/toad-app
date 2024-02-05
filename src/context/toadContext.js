import { createContext, useReducer } from "react";

export const ToadContext = createContext();

export const toadReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOAD":
      return { toad: action.payload };
    default:
      return state;
  }
};

export const ToadProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toadReducer, { toad: null });
  return (
    <ToadContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ToadContext.Provider>
  );
};
