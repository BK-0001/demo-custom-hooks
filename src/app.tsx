import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useDebounce from "./hooks/use-debounce";
import { useDialog } from "./hooks/use-dialog";

export function App() {
  const { ref: dialogRef, open, close } = useDialog();

  const [title, setTitle] = useState<string>("");
  const titleDebounced = useDebounce(title, 500);

  useEffect(() => {
    console.log("sending request to save the change!!");
  }, [titleDebounced]);

  return (
    <div>
      <h1>Dialog Demo</h1>

      <button onClick={open}>Open Dialog</button>

      {createPortal(
        <dialog ref={dialogRef} style={{ padding: 0, border: 0 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ padding: 12 }}>
            <h1>Dialog Title</h1>

            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>Debounced Value: {titleDebounced}</p>

            <div>
              <button onClick={close}>Close Dialog</button>
            </div>
          </div>
        </dialog>,
        document.getElementById("dialog") as HTMLDivElement
      )}
    </div>
  );
}
