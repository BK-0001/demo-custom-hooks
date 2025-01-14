import { createPortal } from "react-dom";
import { useClickOutside } from "./hooks/use-click-outside";
import { useDialog } from "./hooks/use-dialog";

export function App() {
  const { ref: dialogRef, open, close } = useDialog();

  useClickOutside(dialogRef, close);

  return (
    <div>
      <h1>Dialog Demo</h1>

      <button onClick={open}>Open Dialog</button>

      {createPortal(
        <dialog ref={dialogRef}>
          <h1>Dialog Title</h1>

          <p>you can see me on a dialog</p>

          <button onClick={close}>Close Dialog</button>
        </dialog>,
        document.getElementById("dialog") as HTMLDivElement
      )}
    </div>
  );
}
