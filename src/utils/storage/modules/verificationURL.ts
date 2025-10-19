import { URL_VALIDATION_STATUS } from "../../constants/enums";
import { regexExtension } from "../../constants/regex";

export function verificationURL(strURL: string): [URL_VALIDATION_STATUS, string] {
  if (typeof strURL !== "string" || !URL.canParse(strURL)) {
    return [URL_VALIDATION_STATUS.INVALID, ""];
  }

  regexExtension.lastIndex = 0;
  if (!regexExtension.test(strURL)) {
    return [URL_VALIDATION_STATUS.MISSING_KEYWORD, strURL];
  }

  return [URL_VALIDATION_STATUS.SUCCES, strURL];
}
