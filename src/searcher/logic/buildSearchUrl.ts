import { regexExtension } from "../../utils/constants/regex";

/**
 * Generates the URL to be used to perform the requested search.
 *
 * @param rawQuery - The user's query.
 * @param rawURL - The base URL to be used to generate the -------------------------------------------------------------------------------------------------------.
 * @returns A URL with the entered search parameters or the ‘home’ in case it is not an empty string.
 *
 * @example
 * Origin of the URL
 * ```ts
 * buildSearchUrl( '' , 'https://google.com/search?q=--shortcutSearchExtension--' )   // 'https://google.com'
 *
 * ```
 * URL with query
 * ```ts
 * buildSearchUrl( 'hello' , 'https://google.com/search?q=--shortcutSearchExtension--' ) // 'https://google.com/search?q=hello'
 *
 * ```
 */

export function buildSearchUrl(processedQuery: string, rawURL: string) {
  let url: string;

  if (processedQuery === "") {
    url = new URL(rawURL).origin;
  } else {
    url = rawURL.replaceAll(regexExtension, processedQuery);
  }

  if (url.length > 2000) {
    //! --------------------------------------------------------- throw new error
  }
  return url;
}
