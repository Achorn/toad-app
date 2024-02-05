import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { UseAuthContext } from "./hooks/useAuthContext";
import { ToadPage } from "./pages/ToadPage";

function App() {
  const { user } = UseAuthContext();
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <ToadPage /> : <Navigate to="/login" />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
