import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToadContext } from "./context/toadContext";
import { ToadGame } from "./pages/ToadGame";
function App() {
  const [toad, setToad] = useState({ name: "jonny" });

  return (
    <ToadContext.Provider value={{ toad, setToad }}>
      <div className="App">
        <BrowserRouter>
          <div>navbar placeholder</div>
          <Routes>
            <Route path="/" element={<ToadGame />} />
            <Route path="/sample" element={<div>Sample</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ToadContext.Provider>
  );
}

export default App;
