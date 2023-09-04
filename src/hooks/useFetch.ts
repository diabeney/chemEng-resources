import { client } from "./../../client";
import { useState, useEffect } from "react";
export type FetchStatus = "Fetching" | "Error" | "Success" | null;

function useFetch<T>(query: string) {
  const [data, setData] = useState<T>();
  const [status, setStatus] = useState<FetchStatus>(null);
  useEffect(() => {
    (async () => {
      setStatus("Fetching");
      try {
        const response = await client.fetch<T>(query);
        setData(response);
        setStatus("Success");
      } catch (err) {
        console.log({ message: err });
        setStatus("Error");
      }
    })();
  }, [query]);

  return { data, status };
}

export { useFetch };
