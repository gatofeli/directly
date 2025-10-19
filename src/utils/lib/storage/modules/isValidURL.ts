import { EXTENSION_KEYWORD_REGEX } from "../../../constants/regex";

/**
 * Determines whether a string is both a syntactically valid URL and contains the required placeholder defined by {@link EXTENSION_KEYWORD_REGEX}.
 *
 * Determines whether it is a valid URL (String type) for use in the extension.
 *
 * @remarks
 * A string is considered valid when all of the following are true:
 *  1. It is of type `string`.
 *  2. `URL.canParse()` recognizes it as a valid URL.
 *  3. The regular expression placeholder defined by {@link EXTENSION_KEYWORD_REGEX} matches at least once.
 *
 * The regular expression’s internal state is reset on each call to avoid unexpected results when the regex is configured with the `g` flag.
 *
 * @param url  - Candidate string to validate.
 * @returns `true` when the string is a valid provider template; otherwise`false`.
 *
 * @example
 * ```ts
 * isValidURL(`https://example.com/?q=${EXTENSION_KEYWORD_REGEX}`)    // => true
 * ```
 */

export function isValidURL(url: string) {
  if (typeof url !== "string") return false;

  if (!URL.canParse(url)) return false;

  const trimmedURL = url.trim();

  if (!trimmedURL.startsWith("http://") && !trimmedURL.startsWith("https://")) return false;

  return EXTENSION_KEYWORD_REGEX.test(trimmedURL);
}
