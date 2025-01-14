import { RefObject, useEffect } from "react";

export function useClickOutside<T extends RefObject<HTMLElement>>(
  ref: T,
  callback: () => void
) {
  useEffect(() => {
    const closeDialog = (event: MouseEvent) => {
      // TODO: add logic to trigger event only when click outside of the dialog
      // if (ref.current && !ref.current.contains(event.target as Node)) {
      // callback();
      // }

      console.log(event.target);
    };

    document.addEventListener("mousedown", closeDialog);

    return () => {
      document.removeEventListener("mousedown", closeDialog);
    };
  }, []);
}
