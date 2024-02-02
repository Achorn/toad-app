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
        <div className="pages">
          <Routes>
            <Route path="/" element={<ToadGame />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
