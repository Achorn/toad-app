import { useEffect, useState } from "react";
import { CreateToadForm } from "../components/CreateToadForm";
import { useToadContext } from "../hooks/useToadContext";
import { UseAuthContext } from "../hooks/useAuthContext";
import { ToadGame } from "../components/ToadGame";

export const ToadPage = () => {
  const { toad } = useToadContext();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { dispatch } = useToadContext();
  const { user } = UseAuthContext();

  useEffect(() => {
    const fetchToad = async () => {
      setError(null);
      setLoading(true);
      const uri = "https://toad-api.onrender.com/api/toads/";
      const reqInit = {
        headers: {
          Authorization: `Bearer: ${user.token}`,
        },
      };
      const response = await fetch(uri, reqInit);
      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      } else {
        dispatch({ type: "SET_TOAD", payload: json });
      }
      setLoading(false);
    };
    fetchToad();
  }, [dispatch, user]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : !toad ? (
    <CreateToadForm />
  ) : (
    <ToadGame />
  );
};
