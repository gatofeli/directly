import { NAME_EXTENSION } from "./default";

export const EXTENSION_KEYWORD_REGEX = new RegExp(`(?:--)?${NAME_EXTENSION}(?:--)?`, "i");
export const EXTENSION_KEYWORD_REGEX_G = new RegExp(`(?:--)?${NAME_EXTENSION}(?:--)?`, "gi");
