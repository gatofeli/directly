import { buildSearchURL } from "@searcher/logic/buildSearchURL";
import { sanitizeQuery } from "@searcher/logic/sanitizeQuery";
import { useEffect, useState } from "react";

export function useDialog(rawProviderList) {
  const [list, setList] = useState([])

  useEffect(() => {
    list.length > 0
      ? document.querySelector('dialog').show()
      : document.querySelector('dialog').close()
  }, [list])

  const prepareList = (userQuery) => {
    const sanitizedQuery = sanitizeQuery(userQuery);

    const newList = rawProviderList.map(({ alias, url: rawURL }) => ({ alias, url: buildSearchURL(sanitizedQuery, rawURL) }))
    setList(newList)
  }

  const closeList = () => {
    setList([])
  }

  return { list, prepareList, closeList };
}
