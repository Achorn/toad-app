import { useState } from "react";
import { useToadContext } from "./useToadContext";
import { UseAuthContext } from "./useAuthContext";
import { useGameContext } from "../context/GameContext";

export const useGetToad = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { dispatch } = useToadContext();
  const { user } = UseAuthContext();

  const getToad = async () => {
    console.log("getting toad in useToad");
    setError(null);
    setLoading(true);

    const response = await fetch("https://toad-api.onrender.com/api/toads/", {
      headers: {
        Authorization: `Bearer: ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      dispatch({ type: "SET_TOAD", payload: json });
    }

    setLoading(false);
  };
  return { getToad, error, loading };
};

export const useDeleteToad = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { toad, dispatch } = useToadContext();
  const { user } = UseAuthContext();

  const deleteToad = async () => {
    setError(null);
    setLoading(true);

    const response = await fetch(
      "https://toad-api.onrender.com/api/toads/" + toad._id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer: ${user.token}`,
          "Content-Type": "Application/json",
          Accept: "application/json",
        },
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      dispatch({ type: "DELETE_TOAD" });
    }

    setLoading(false);
  };
  return { deleteToad, error, loading };
};

export const useCreateToad = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { dispatch } = useToadContext();
  const { user } = UseAuthContext();

  const createToad = async (toad) => {
    console.log("creating toad");
    if (!user) {
      console.log("no uese");
      setError("You must be logged in");
      return;
    }
    setLoading(true);
    setError(null);
    const uri = "https://toad-api.onrender.com/api/toads/";
    const init = {
      method: "POST",
      body: JSON.stringify(toad),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    fetch(uri, init)
      .then((res) => {
        if (!res.ok) {
          console.log(res);
          throw Error(`${res.status}:could not fetch data`);
        }
        return res.json();
      })
      .then((json) => {
        dispatch({ type: "SET_TOAD", payload: json });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  return { createToad, loading, error };
};

export const useUpdateToad = () => {
  const [loading, setLoading] = useState(false);
  const { setError } = useGameContext();
  const { dispatch } = useToadContext();
  const { user } = UseAuthContext();

  const updateToad = async (previousToad, toad) => {
    setError();
    setLoading(true);
    const uri = "https://toad-api.onrender.com/api/toads/" + toad._id;
    const fetchInit = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "Application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(toad),
    };
    fetch(uri, fetchInit)
      .then((res) => {
        if (!res.ok) {
          console.log("res: ", res);
          throw Error(`${res.status}: could not make request`);
        }
        dispatch({ type: "SET_TOAD", payload: toad });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  return { updateToad, loading };
};
