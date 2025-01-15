import { useRef } from "react";
import { useClickOutside } from "./use-click-outside";

export function useDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  const open = () => {
    ref.current?.showModal();
  };

  const close = () => {
    ref.current?.close();
  };

  useClickOutside(ref, close);

  return { ref, open, close };
}
