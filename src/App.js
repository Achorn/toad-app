import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>navbar placeholder</div>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/sample" element={<div>Sample</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
