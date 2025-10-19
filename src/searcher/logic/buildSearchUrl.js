import { EXTENSION_KEYWORD_REGEX } from "../../utils/constants/regex";
export function buildSearchUrl(query, provider) {
  const searchURL = query.length === 0 ? new URL(provider).origin : provider.replaceAll(EXTENSION_KEYWORD_REGEX, query);

  if (searchURL.length > 2000) {
    //! --------------------------------------------------------- throw new error (No se que hacer en este caso)
  }

  return searchURL;
}
