import { useRef } from "react";

export function useFocusProvider() {
  const listRef = useRef();

  const changeFocus = (arrow) => {
    const elements = Array.from(listRef.current.querySelectorAll("button"));
    const currentIdx = elements.indexOf(document.activeElement);

    const OPTIONS = {
      ArrowUp: () => prevProvider({ elements, currentIdx }),
      ArrowDown: () => nextProvider({ elements, currentIdx }),
    };

    OPTIONS[arrow]();
  };

  const prevProvider = ({ elements, currentIdx }) => {
    const wrappedIndex = currentIdx === 0 ? elements.length : currentIdx;

    elements[wrappedIndex - 1].focus();
  };
  const nextProvider = ({ elements, currentIdx }) => {
    const wrappedIndex = currentIdx === elements.length - 1 ? 0 : currentIdx + 1;

    elements[wrappedIndex].focus();
  };

  return { listRef, changeFocus };
}
