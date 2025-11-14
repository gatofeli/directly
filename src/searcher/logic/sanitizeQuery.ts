import { MAX_LENGTH_QUERY } from "@utils/constants/default";

export function sanitizeQuery(queryInput: string | null) {
  const rawQuery = typeof queryInput === "string" ? queryInput : "";

  const trimmedQuery = rawQuery.trim();

  return trimmedQuery.length > MAX_LENGTH_QUERY ? trimmedQuery.slice(0, MAX_LENGTH_QUERY).trimEnd() : trimmedQuery;
}
