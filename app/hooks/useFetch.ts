import { Optional } from "@/types/types";
import { useState } from "react";

function useFetch<T>(defaultValue?: T) {
  const [data, setData] = useState<Optional<T>>(defaultValue);
  const [isLoading, setLoading] = useState(false);

  async function fetcher<R>(
    request: Promise<R> | (() => Promise<R>),
    delayMs: number = 1000
  ): Promise<R | undefined> {
    setLoading(true);
    try {
      const result =
        typeof request === "function" ? await request() : await request;
      await new Promise((resolve) => setTimeout(resolve, delayMs)); // Имитация задержки
      setData(result as T);
      return result;
    } catch (error) {
      console.error("Fetch error:", error);
      return undefined;
    } finally {
      setLoading(false);
    }
  }

  return { isLoading, data, fetcher };
}

export { useFetch };
