/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setPending(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (e) {
      setError(`${e}. Some Error Occourd`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);
  return { data, error, pending };
}

export default useFetch;
