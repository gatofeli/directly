import { DEFAULT_ALIAS } from "../../constants/default";

export function verificationAlias(alias: string): { alias: string; updateAlias: boolean } {
  if (typeof alias !== "string") {
    return { alias: DEFAULT_ALIAS, updateAlias: true };
  }

  let procesedAlias = alias.trim();
  if (procesedAlias.length > 20) {
    procesedAlias = procesedAlias.slice(0, 20);
  }

  return { alias: procesedAlias, updateAlias: alias !== procesedAlias };
}
