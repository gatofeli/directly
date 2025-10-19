import { requestNavigation } from "../../utils/lib/message/requestNavigation";
import { buildSearchURL } from "./buildSearchURL";
import { sanitizeQuery } from "./sanitizeQuery";

/**
 * Creates a search URL from the given URL template and query, then requests navigation to it.
 *
 * @remarks
 * This function extracts the `query` field from the provided HTML form, sanitizes it to prevent injection or invalid characters, constructs the search URL using the specified provider, and finally sends an internal message to request navigation.
 * If `ctrlKey` is true, the navigation will open in a new tab.
 *
 * @param provider - The URL template string for the search engine, where a placeholder will be replaced by the sanitized query (e.g. "https://example.com/?q=--DirectlyExtension--").
 * @param eventTarget - The HTMLFormElement representing the search form from which to extract input values.
 * @param ctrlKey - Whether the user pressed Ctrl (or Cmd) when submitting.
 *                  If true, opens in a new tab; otherwise, reuses the same tab.
 */
export function goToSearch(provider: string, eventTarget: HTMLFormElement, ctrlKey: boolean) {
  const queryInput = new FormData(eventTarget).get("query") as string | null;
  const isNewTab = ctrlKey;

  const query = sanitizeQuery(queryInput);
  const searchUrl = buildSearchURL(query, provider);

  requestNavigation(searchUrl, isNewTab);
}
