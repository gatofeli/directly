import { calcNewFocus } from "@searcher/logic/getFocusable";
import { useRef, useEffect } from "react";

export function useFocusProvider() {
  const containerRef = useRef(null);
  const anchorsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.querySelector("a")?.focus();
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

    const newTargetFocusable = calcNewFocus(list, currentIdx, arrow)
    newTargetFocusable?.focus();
  };

  return { containerRef, changeFocus };
}
