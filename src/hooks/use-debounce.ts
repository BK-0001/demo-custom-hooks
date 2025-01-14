import { useEffect, useState } from "react";

export default function useDebounce(value: string, timeout: number) {
  const [debounced, setDebounced] = useState<string>("");

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounced(value);
    }, timeout);
    console.log("add timeout");

    return () => {
      clearTimeout(id);
      console.log("remove timeout");
    };
  }, [value]);

  return debounced;
}
