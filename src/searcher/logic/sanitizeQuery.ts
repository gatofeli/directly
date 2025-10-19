import { MAX_LENGTH_QUERY } from "../../utils/constants/default";

/**
 * Returns a sanitized version of the query string.
 *
 * @remarks
 * Sanitization steps:
 *  1. Trim leading and trailing whitespace.
 *  2. Truncate the result to {@link MAX_LENGTH_QUERY} characters.
 *
 *
 *
 * @param queryInput - Raw user input.
 *                     If the value is not a `string`, an empty string is used instead.
 *
 * @returns The normalized query string.
 *
 * @example
 * ```ts
 * sanitizeQuery(true)                       // => ""
 * sanitizeQuery("    hello    ")            // => "hello"
 * sanitizeQuery("x".repeat(600)).length     // => "500"
 * ```
 */
export function sanitizeQuery(queryInput: string | null) {
  const rawQuery = typeof queryInput === "string" ? queryInput : "";

  const trimmedQuery = rawQuery.trim();

  return trimmedQuery.length > MAX_LENGTH_QUERY ? trimmedQuery.slice(0, MAX_LENGTH_QUERY).trimEnd() : trimmedQuery;
}
