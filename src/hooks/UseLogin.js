import { useState } from "react";
import { UseAuthContext } from "./useAuthContext";

export const UseLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = UseAuthContext();
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const uri = "https://toad-api.onrender.com/api/user/login";
    const init = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "Application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    const response = await fetch(uri, init);
    const json = await response.json();

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
    } else {
      setError(json.error);
    }
    setIsLoading(false);
  };

  return { login, isLoading, error };
};
