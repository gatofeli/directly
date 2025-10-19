import { EXTENSION_KEYWORD_REGEX } from "../../constants/regex";

export function isValidURL(url: string) {
  if (typeof url !== "string" || !URL.canParse(url)) {
    return false;
  }

  EXTENSION_KEYWORD_REGEX.lastIndex = 0;
  return EXTENSION_KEYWORD_REGEX.test(url);
}
