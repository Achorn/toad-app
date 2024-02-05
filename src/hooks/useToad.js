import { useState } from "react";
import { useToadContext } from "./useToadContext";
import { UseAuthContext } from "./useAuthContext";

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
    const response = await fetch(uri, {
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
      dispatch({ type: "SET_TOAD", payload: json });
    }
    setLoading(false);
  };

  return { createToad, loading, error };
};

export const useUpdateToad = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { dispatch } = useToadContext();
  const { user } = UseAuthContext();

  const updateToad = async (previousToad, toad) => {
    console.log("creating toad");
    setError();
    setLoading(true);
    console.log("toadID: ", toad._id);
    console.log("token: ", user.token);

    fetch("https://toad-api.onrender.com/api/toads/" + toad._id, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "Application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(toad),
    })
      .then(async (response) => {
        const json = await response.json();
        if (!response.ok) {
          setError(json.error);
          dispatch({ type: "SET_TOAD", payload: previousToad });
        }
        if (response.ok) {
          console.log("dispatching");
          dispatch({ type: "SET_TOAD", payload: toad });
        }
      })
      .catch((err) => {
        console.log(err.message);
        return;
      })
      .finally(() => setLoading(false));
  };

  return { updateToad, loading, error };
};
