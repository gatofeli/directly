import { NAME_EXTENSION } from "./default";

export const EXTENSION_KEYWORD_REGEX = new RegExp(`(?:--)?${NAME_EXTENSION}(?:--)?`, "i");
export const EXTENSION_KEYWORD_REGEX_G = new RegExp(`(?:--)?${NAME_EXTENSION}(?:--)?`, "gi");

export const URL_BROWSER_NEW_TAB = new RegExp("^[a-zA-Z]+:\/\/newtab(?:[/?].*)?$","i");