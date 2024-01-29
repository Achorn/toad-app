import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToadGame } from "./pages/ToadGame";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ToadGame />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
