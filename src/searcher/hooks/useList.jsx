import { useEffect, useRef } from "react";
import { useListModifier } from "./useListModifier";

export function useList(rawProviderList) {
  const { list, generateList, resetList } = useListModifier(rawProviderList)
  const dialogNavRef = useRef(null)

  useEffect(() => {
    const dialog = dialogNavRef.current

    if (!dialog) return;

    list.length > 0
      ? dialog.show()
      : dialog.close()
  }, [list])

  return { showList: generateList, closeList: resetList, list, dialogNavRef }
}

