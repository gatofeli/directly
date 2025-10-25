import { EXTENSION_KEYWORD_REGEX_G } from "../../utils/constants/regex";

export function buildSearchURL(query: string, provider: string) {
  EXTENSION_KEYWORD_REGEX_G.lastIndex = 0;
  return query.length === 0 ? new URL(provider).origin : provider.replaceAll(EXTENSION_KEYWORD_REGEX_G, query);
}
