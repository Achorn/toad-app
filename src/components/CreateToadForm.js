import { useState } from "react";
import { useCreateToad } from "../hooks/useToad";

export const CreateToadForm = () => {
  const [name, setName] = useState("");
  const { createToad, loading, error } = useCreateToad();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const toad = { name };
    createToad(toad);
  };

  return (
    <form className="toadCreate" onSubmit={handleSubmit}>
      <h3>Create Toad</h3>
      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button disabled={loading}>Create</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
