import { useState } from "react";
import { UseLogin } from "../hooks/useLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = UseLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className="page">
      <h3>Log In</h3>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button disabled={isLoading}>Submit</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};
