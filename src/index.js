import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToadProvider } from "./context/toadContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToadProvider>
      <App />
    </ToadProvider>
  </React.StrictMode>
);
