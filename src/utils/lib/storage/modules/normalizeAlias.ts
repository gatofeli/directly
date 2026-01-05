import { DEFAULT_ALIAS, MAX_LENGTH_ALIAS } from "../../../constants/default";

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
