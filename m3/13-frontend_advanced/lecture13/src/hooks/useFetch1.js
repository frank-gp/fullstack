import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
          throw new Error("Request failed with status: " + response.status);
        }
        setData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    error,
  };
};
