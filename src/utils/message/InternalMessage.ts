import { KEY_MESSAGE, messageNavigation, unionMessage } from "./types";

class InternalMessage {
  requestNavigation(url: string, isSameTab: boolean) {
    const typeMessage = isSameTab ? KEY_MESSAGE.NAVIGATION_SAME : KEY_MESSAGE.NAVIGATION_NEW;

    const message: messageNavigation = {
      typeMessage,
      url,
    };

    this.#sendMessage(message);
  }
  async #sendMessage(message: unionMessage) {
    await chrome.runtime.sendMessage(message);
    if (chrome.runtime.lastError) {
      //! ------------------------------------------------------------
    }
  }
}

export const internalMessage = new InternalMessage();
