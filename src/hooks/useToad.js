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
    setError(null);
    setLoading(true);
    const uri = "https://toad-api.onrender.com/api/toads/";
    const options = {
      headers: {
        Authorization: `Bearer: ${user.token}`,
      },
    };

    try {
      const res = await fetch(uri, options);
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_TOAD", payload: json });
      } else {
        setError(json.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
    const uri = "https://toad-api.onrender.com/api/toads/";
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer: ${user.token}`,
        "Content-Type": "Application/json",
        Accept: "application/json",
      },
    };

    try {
      const res = await fetch(uri + toad._id, options);
      const json = await res.json();
      if (res.ok) {
        dispatch({ type: "DELETE_TOAD" });
      } else {
        setError(json.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { deleteToad, error, loading };
};

export const useCreateToad = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { dispatch } = useToadContext();
  const { user } = UseAuthContext();

  const createToad = async (toad) => {
    if (!user) {
      setError("You must be logged in");
      return;
    }
    setLoading(true);
    setError(null);

    const uri = "https://toad-api.onrender.com/api/toads/";
    const options = {
      method: "POST",
      body: JSON.stringify(toad),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    try {
      const res = await fetch(uri, options);
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_TOAD", payload: json });
      } else {
        setError(json.message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { createToad, loading, error };
};

export const useUpdateToad = () => {
  const [loading, setLoading] = useState(false);
  const { setError } = useGameContext();
  const { dispatch } = useToadContext();
  const { user } = UseAuthContext();

  const updateToad = async (previousToad, toad) => {
    setError(null);
    setLoading(true);
    const uri = "https://toad-api.onrender.com/api/toads/" + toad._id;
    const options = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "Application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(toad),
    };

    try {
      const res = await fetch(uri, options);
      const json = await res.json();
      if (res.ok) {
        dispatch({ type: "SET_TOAD", payload: toad });
      } else {
        setError(json.message);
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return { updateToad, loading };
};
