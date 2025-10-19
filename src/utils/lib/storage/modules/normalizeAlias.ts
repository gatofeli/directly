import { DEFAULT_ALIAS, MAX_LENGTH_ALIAS } from "../../../constants/default";

/**
 * Validates and normalizes the alias of a search provider.
 *
 * @remarks
 * Processing steps:
 *  1. Values that are **not** of type `string` are replaced with {@link DEFAULT_ALIAS}.
 *  2. Leading and trailing whitespace are trimmed.
 *  3. The result is truncated to a maximum length defined in {@link MAX_LENGTH_ALIAS}.
 *
 * If the original value is modified in any way, the `updateAlias` flag is set to `true` to indicate that changes have been made.
 *
 * @param alias - Raw alias provided by the user or stored data.
 * @returns An object containing the normalized alias and a flag that indicates whether the alias was modified.
 *
 * @example
 * ```ts
 * normalizeAlias("    example    ")    // => {alias: "example" , updateAlias: true}
 * ```
 */

export function normalizeAlias(alias: string): { normalizedAlias: string; isUpdateAlias: boolean } {
  if (typeof alias !== "string") {
    return { normalizedAlias: DEFAULT_ALIAS, isUpdateAlias: true };
  }

  let procesedAlias = alias.trim();
  const length = procesedAlias.length;

  if (length === 0) {
    return { normalizedAlias: DEFAULT_ALIAS, isUpdateAlias: true };
  }

  procesedAlias = length > MAX_LENGTH_ALIAS ? procesedAlias.slice(0, MAX_LENGTH_ALIAS).trimEnd() : procesedAlias;

  return { normalizedAlias: procesedAlias, isUpdateAlias: alias !== procesedAlias };
}
