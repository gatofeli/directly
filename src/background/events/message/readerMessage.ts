import { ACTIONS, KEY_MESSAGE, UnionMsg } from "../../../utils/message/types";
import { navigateInNewTab } from "./navegation/navigateInNewTab";
import { navigateInSameTab } from "./navegation/navigateInSameTab";

export function readerMessage(key: KEY_MESSAGE, data: UnionMsg, sender: chrome.runtime.MessageSender) {
  const ACTIONS: ACTIONS = {
    [KEY_MESSAGE.NAVIGATION_SAME]: navigateInSameTab,
    [KEY_MESSAGE.NAVIGATION_NEW]: navigateInNewTab,
  };

  const action = ACTIONS[key];

  if (typeof action !== "function") {
    //!-------------------------------
  }

  action(data, sender);
}
