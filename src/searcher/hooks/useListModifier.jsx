import { buildSearchURL } from "@searcher/logic/buildSearchURL";
import { sanitizeQuery } from "@searcher/logic/sanitizeQuery";
import { useState } from "react";

export function useListModifier(rawProviderList) {
  const [list, setList] = useState([])

  const generateList = (userQuery) => {
    const sanitizedQuery = sanitizeQuery(userQuery);

    const newList = rawProviderList.map(({ alias, url: rawURL }) => ({ alias, url: buildSearchURL(sanitizedQuery, rawURL) }))
    setList(newList)
  }

  const resetList = () => {
    setList([])
  }

  return { list, generateList, resetList };
}