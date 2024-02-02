import { Link } from "react-router-dom";
import { UseAuthContext } from "../hooks/UseAuthContext";
import { UseLogout } from "../hooks/UseLogout";

export const Navbar = () => {
  const { user } = UseAuthContext();
  const { logout } = UseLogout();
  return (
    <div>
      <nav>
        <ul id="navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {!user && (
            <div>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log In</Link>
            </div>
          )}
          {user && <button onClick={logout}>Logout</button>}
        </ul>
      </nav>
    </div>
  );
};
