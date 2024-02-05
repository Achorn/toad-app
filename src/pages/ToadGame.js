import { useEffect, useState } from "react";
import { TheToad } from "../components/TheToad";
import { EducateButton } from "../components/buttons/EducateButton";
import { FeedButton } from "../components/buttons/FeedButton";
import { CreateToadForm } from "../components/CreateToadForm";
import { useToadContext } from "../hooks/useToadContext";
import { useDeleteToad } from "../hooks/useToad";
import { UseAuthContext } from "../hooks/useAuthContext";

export const ToadGame = () => {
  const { toad } = useToadContext();
  const {
    deleteToad,
    error: deleteError,
    loading: deleteLoading,
  } = useDeleteToad();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { dispatch } = useToadContext();
  const { user } = UseAuthContext();

  useEffect(() => {
    const fetchToad = async () => {
      console.log("fetching toad");
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

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          {!toad ? (
            <CreateToadForm />
          ) : (
            <div>
              <TheToad />
              <div>
                <FeedButton />
                <EducateButton />
              </div>
              <button disabled={deleteLoading} onClick={deleteToad}>
                Delete
              </button>
              {deleteError && <div className="error">{deleteError}</div>}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
