import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/interceptor";

/**
 * Custom hook to fetch data from an API endpoint using axios Instance.
 *
 * @param endpoint - The API endpoint to fetch data from.
 * @returns An object containing:
 *   - data: The fetched data (null initially).
 *   - isLoading: A boolean indicating if the data is still loading.
 *   - error: Error message if any error occurs during the fetch, null if no error.
 */
const useFetch = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const response = await axiosInstance.get(endpoint);
        setData(response?.data);
      } catch (err: any) {
        setError(err?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useFetch;
