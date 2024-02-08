import { useState } from "react";
import { UseAuthContext } from "./useAuthContext";

export const UseSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = UseAuthContext();
  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const uri = "https://toad-api.onrender.com/api/user/signup";
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "Application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    try {
      const res = await fetch(uri, options);
      const json = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(json));
        dispatch({ type: "LOGIN", payload: json });
      } else {
        setError(json.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
