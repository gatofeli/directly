import { MsgNavigation } from "../../../../utils/message/types";

export async function navigateInNewTab({ url }: MsgNavigation) {
  if (typeof url !== "string") {
    //! ------------------------------------------------------ Error
  }

  await chrome.tabs.create({ url, active: false });

  if (chrome.runtime.lastError) {
    //! ------------------------------------------------------ Aviso
  }
}
