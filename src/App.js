import { Routes, Route, HashRouter } from "react-router-dom";
import { ToadGame } from "./pages/ToadGame";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ToadGame />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
