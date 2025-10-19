import { internalMessage } from "../../utils/message/InternalMessage";
import { buildSearchUrl } from "./buildSearchUrl";
import { getQuery } from "./getQuery";

/* ------------------------- To Do ----------------------------
TODO: Manejar errores
*/

export function handleSearch(rawURL: string, isNewTab: boolean) {
  if (!URL.canParse(rawURL)) {
    //!-------------------------------------------------------------------------------
  }

  const rawQuery = getQuery();
  const url = buildSearchUrl(rawQuery, rawURL);

  internalMessage.requestNavigation(url, isNewTab);
}
