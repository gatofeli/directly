import { useEffect, useRef } from "react";
import { useListGenerate } from "./useListGenerate";

export function useListVisibility(rawProviderList) {
  const { list, generateList, resetList } = useListGenerate(rawProviderList)
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

