import { useEffect, useRef, useState } from "react";
import { goToSearch } from "../logic/goToSearch";

export function useToggleList() {
  const [isVisibleList, setIsVisibleList] = useState(false);

  const hiddenList = () => {
    setIsVisibleList(false);
  };

  const showList = () => {
    setIsVisibleList(true)
  };

  return { isVisibleList, showList, hiddenList };
}
