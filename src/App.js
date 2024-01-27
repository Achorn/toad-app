import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToadGame } from "./pages/ToadGame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>navbar placeholder</div>
        <Routes>
          <Route path="/" element={<ToadGame />} />
          <Route path="/sample" element={<div>Sample</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
