import { EXTENSION_KEYWORD_REGEX } from "../../../constants/regex";

export function isValidURL(url: string) {
  if (typeof url !== "string") return false;

  if (!URL.canParse(url)) return false;

  const trimmedURL = url.trim();

  if (!trimmedURL.startsWith("http://") && !trimmedURL.startsWith("https://")) return false;

  return EXTENSION_KEYWORD_REGEX.test(trimmedURL);
}
