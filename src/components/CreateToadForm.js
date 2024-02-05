import { useState } from "react";
import { UseAuthContext } from "../hooks/useAuthContext";
import { useToadContext } from "../hooks/useToadContext";

export const CreateToadForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const { user } = UseAuthContext();
  const { dispatch } = useToadContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError("You must be logged in");
      return;
    }
    const toad = { name };
    const response = await fetch("https://toad-api.onrender.com/api/toads/", {
      method: "POST",
      body: JSON.stringify(toad),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    } else {
      setError(null);
      dispatch({ type: "SET_TOAD", payload: json });
    }
  };

  return (
    <form className="toadCreate" onSubmit={handleSubmit}>
      <h3>Create Toad</h3>
      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button>Create</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
