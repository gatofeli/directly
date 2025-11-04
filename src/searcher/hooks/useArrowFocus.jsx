import { ARROW_KEY, getNextFocusTarget } from "@searcher/logic/getNextFocusTarget";
import { useEffect, useRef } from "react";

export function useArrowFocus() {
  const containerRef = useRef(null);
  const anchorsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;
    anchorsRef.current = Array.from(containerRef.current.querySelectorAll("a"))
  }, []);

  const changeFocus = (arrow) => {
    const list = anchorsRef.current
    if (list.length === 0) return;

    const currentIdx = list.indexOf(document.activeElement);
    if (currentIdx === -1) {
      list[0]?.focus()
      return
    }

    const newFocus = getNextFocusTarget(list, currentIdx, arrow)
    newFocus?.focus();
  };

  return { containerRef, changeFocus, ARROW_KEY };
}
