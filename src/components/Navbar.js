import { Link } from "react-router-dom";
import { UseAuthContext } from "../hooks/useAuthContext";
import { UseLogout } from "../hooks/useLogout";

export const Navbar = () => {
  const { user } = UseAuthContext();
  const { logout } = UseLogout();

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>King Toad</h1>
        </Link>
        <nav>
          <Link to="/about">About</Link>
          {!user && (
            <div>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log In</Link>
            </div>
          )}
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={logout}>Logout</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
