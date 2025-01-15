import { RefObject, useEffect } from "react";

export function useClickOutside<T extends RefObject<HTMLElement>>(
  ref: T,
  callback: () => void
) {
  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (
        ref.current &&
        ref.current.tagName === "DIALOG" &&
        ref.current === event.target
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", close);

    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);
}
