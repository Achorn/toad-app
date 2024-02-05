import { useEffect, useState } from "react";
import { TheToad } from "../components/TheToad";
import { EducateButton } from "../components/buttons/EducateButton";
import { FeedButton } from "../components/buttons/FeedButton";
import { UseAuthContext } from "../hooks/useAuthContext";
import { CreateToadForm } from "../components/CreateToadForm";
import { useToadContext } from "../hooks/useToadContext";

export const ToadGame = () => {
  const { user } = UseAuthContext();
  const { toad, dispatch } = useToadContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("fetching toad");
    console.log(user);
    setLoading(true);
    fetch("https://toad-api.onrender.com/api/toads/", {
      headers: {
        Authorization: `Bearer: ${user.token}`,
      },
    })
      .then((res) => {
        console.log("res: ", res);
        return res.json();
      })
      .then((data) => {
        console.log("data: ", data);
        dispatch({ type: "SET_TOAD", payload: data });
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
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
              <FeedButton />
              <EducateButton />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
