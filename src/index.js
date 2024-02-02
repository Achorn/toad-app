import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToadProvider } from "./context/toadContext";
import { GameProvider } from "./context/gameContect";
import { AuthContextProvider } from "./context/authContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ToadProvider>
        <GameProvider>
          <App />
        </GameProvider>
      </ToadProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
