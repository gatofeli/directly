import { useRef } from "react";

export function useSubmitProvider({ setCtrlSubmit }) {
  const isHasCtrlKey = useRef(false);

  const handleButtonClick = (event) => {
    if (!isHasCtrlKey.current) {
      const ctrlKey = event.ctrlKey || event.metaKey;
      setCtrlSubmit(ctrlKey);
    }
    isHasCtrlKey.current = false;
  };

  const handleButtonKey = (event) => {
    const ctrlKey = event.ctrlKey || event.metaKey;
    if ((event.key === "Enter" || event.key === " ") && ctrlKey) {
      isHasCtrlKey.current = true;
      setCtrlSubmit(ctrlKey);
      event.target.click();
    }
  };

  return { handleButtonKey, handleButtonClick };
}
