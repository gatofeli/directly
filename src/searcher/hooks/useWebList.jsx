import { buildSearchURL } from "@searcher/logic/buildSearchURL";
import { sanitizeQuery } from "@searcher/logic/sanitizeQuery";
import { useState } from "react";

export function useWebList(rawList) {
  const [webList, setWebList] = useState([])

  const generateList = (userQuery) => {
    const newWebList = []
    const handledQuery = sanitizeQuery(userQuery);

    for (const provider of rawList) {
      const newWeb = {
        alias: provider.alias,
        url: buildSearchURL(handledQuery, provider.url)
      }
      newWebList.push(newWeb)
    }

    setWebList(newWebList)
  }

  return { webList, generateList }
}