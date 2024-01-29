import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToadGame } from "./pages/ToadGame";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ToadGame />} />
          <Route path="/sample" element={<div>Sample</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
