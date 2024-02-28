import { Link } from "react-router-dom";
import { UseAuthContext } from "../hooks/useAuthContext";
import { UseLogout } from "../hooks/useLogout";
import { Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";

export const Navbar = () => {
  const { user } = UseAuthContext();
  const { logout } = UseLogout();

  return (
    <header>
      <div className="container">
        <Link to="/">
          <Typography variant="h4" noWrap>
            King Toad
          </Typography>
        </Link>
        <nav>
          {/* <Link to="/about">About</Link> */}
          {!user && (
            <div>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Log In</Link>
            </div>
          )}
          {user && (
            <FlexBetween>
              <Typography noWrap>{user.email}</Typography>
              <button onClick={logout}>Logout</button>
            </FlexBetween>
          )}
        </nav>
      </div>
    </header>
  );
};
