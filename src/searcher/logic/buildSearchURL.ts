import { EXTENSION_KEYWORD_REGEX_G } from "../../utils/constants/regex";

/**
 * Builds a search URL using the specified provider template.
 *
 *
 * @remarks
 * Two scenarios are handled:
 *  1. **Empty query** – Returns the provider’s origin (home page).
 *  2. **Non-empty query** – Replaces every occurrence of {@link EXTENSION_KEYWORD_REGEX} in `provider` with the raw `query` value and returns the resulting string.
 *
 * @param query - The user’s search text.
 * @param provider - URL template that contains at least one placeholder matching `EXTENSION_KEYWORD_REGEX`.
 *
 * @returns The fully-formed search url.
 *
 * @example
 * ```ts
 * buildSearchUrl("AAA",`https://duckduckgo.com/?q=${EXTENSION_KEYWORD_REGEX}`)  // => 'https://duckduckgo.com/?q=AAA'
 * ```
 *
 * ```ts
 * buildSearchUrl("",`https://duckduckgo.com/?q=${EXTENSION_KEYWORD_REGEX}`)       // => 'https://duckduckgo.com'
 * ```
 */

export function buildSearchURL(query: string, provider: string) {
  EXTENSION_KEYWORD_REGEX_G.lastIndex = 0;
  return query.length === 0 ? new URL(provider).origin : provider.replaceAll(EXTENSION_KEYWORD_REGEX_G, query);
}
