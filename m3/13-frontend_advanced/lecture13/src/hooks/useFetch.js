import { useState, useEffect } from "react";
import { getUsers } from "../services/apiService";

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (endpoint === "users") {
          const users = await getUsers();
          setData(users);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [endpoint]);

  return {
    data,
    error,
  };
};
