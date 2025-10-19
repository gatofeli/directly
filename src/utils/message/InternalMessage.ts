import { KEY_MESSAGE, Message, MsgNavigation, UnionMsg } from "./types";

class InternalMessage {
  extractMessage(message: unknown): [KEY_MESSAGE, UnionMsg] {
    const ACTIONS: ACTIONSExtract = {
      [KEY_MESSAGE.NAVIGATION_SAME]: this.#parseNavigationMessage,
      [KEY_MESSAGE.NAVIGATION_NEW]: this.#parseNavigationMessage,
    };

    if (typeof message !== "object" || message == null) {
      //!----------------------------------------------
      throw new Error("------------------------ tipado message ------------------------------");
    }

    const [unvalidateKey, unvalidateValue] = Object.entries(message)[0];

    if (unvalidateKey in KEY_MESSAGE === false) {
      //!----------------------------------------------
      throw new Error("------------------------- Key no es Enum -----------------------------");
    }
    const key = unvalidateKey as KEY_MESSAGE;
    const value = ACTIONS[key](unvalidateValue);

    return [key, value];
  }
  #parseNavigationMessage({ url }: MsgNavigation) {
    if (!URL.canParse(url)) {
      //!----------------------------------------------
      throw new Error("------------- Navigate [URL.canParse] --------------------");
    }
    const data: MsgNavigation = { url };

    return data;
  }

  requestNavigation(url: string, isNewTab: boolean) {
    let key: KEY_MESSAGE;

    if (!URL.canParse(url)) {
      //! -------------------------------------------------------------------------
      throw new Error("--------------- url ---------------");
    }

    if (isNewTab) {
      key = KEY_MESSAGE.NAVIGATION_NEW;
    } else {
      key = KEY_MESSAGE.NAVIGATION_SAME;
    }

    const data: MsgNavigation = { url };
    const message: Message = { [key]: data };

    this.#sendMessage(message);
  }
  async #sendMessage(message: Message) {
    await chrome.runtime.sendMessage(message);
    if (chrome.runtime.lastError) {
      //! ------------------------------------------------------------
    }
  }
}

export const internalMessage = new InternalMessage();

type ACTIONSExtract = {
  [KEY_MESSAGE.NAVIGATION_SAME]: (data: MsgNavigation) => MsgNavigation;
  [KEY_MESSAGE.NAVIGATION_NEW]: (data: MsgNavigation) => MsgNavigation;
};
