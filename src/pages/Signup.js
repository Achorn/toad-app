import { useState } from "react";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
        <button>Submit</button>
      </form>
    </div>
  );
};
