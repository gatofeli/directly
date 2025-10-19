import { useRef } from "react";

export function useSubmitProvider({ setCtrlSubmit }) {
  const ctrlEnter = useRef(false);

  const autoSubmit = (event) => {
    if (!ctrlEnter.current) {
      const newData = event.ctrlKey || event.metaKey;
      setCtrlSubmit(newData);
    }
    ctrlEnter.current = false;
  };

  const manualSubmit = (event) => {
    const ctrl = event.ctrlKey || event.metaKey;
    if (event.key === "Enter" && ctrl) {
      ctrlEnter.current = true;
      setCtrlSubmit(ctrl);
      const activeElement = document.activeElement;
      activeElement.click();
    }
  };

  return { autoSubmit, manualSubmit };
}
