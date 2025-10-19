export function sanitizeQuery(queryInput) {
  const rawQuery = typeof queryInput === "string" ? queryInput : "";

  const queryTrim = rawQuery.trim();

  return queryTrim.length > 500 ? queryTrim.slice(0, 500) : queryTrim;
}
