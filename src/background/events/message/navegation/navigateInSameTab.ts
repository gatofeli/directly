import { MsgNavigation } from "../../../../utils/message/types";

export async function navigateInSameTab({ url }: MsgNavigation, { tab }: chrome.runtime.MessageSender) {
  const id = tab?.id;
  if (typeof url !== "string") {
    //! ------------------------------------------------------ Error
  }
  if (typeof id !== "number") {
    //! ------------------------------------------------------ Aviso
    //! ------------------------------------------------------ navigateInNewTab()
    return;
  }

  await chrome.tabs.update(id, { url });

  if (chrome.runtime.lastError) {
    //! ------------------------------------------------------ Aviso
    //! ------------------------------------------------------ navigateInNewTab()
  }
}
