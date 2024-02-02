import { useState } from "react";
import { UseSignup } from "../hooks/useSignup";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = UseSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked button");
    signup(email, password);
  };
  return (
    <div className="page">
      <h3>Sign Up</h3>
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
