export function requestNavigation(url: string, isNewTab: boolean) {
  const typeMessage = isNewTab ? KEY_MESSAGE.NAVIGATION_NEW : KEY_MESSAGE.NAVIGATION_SAME;

  const message: MessageNavigation = {
    typeMessage,
    url,
  };

  sendMessage(message);
}

async function sendMessage(message: UnionMessage) {
  try {
    await chrome.runtime.sendMessage(message);
  } catch {
    //!-----------------------------------------------------------------
  }
}

export enum KEY_MESSAGE {
  NAVIGATION_SAME = "NAVIGATION_SAME",
  NAVIGATION_NEW = "NAVIGATION_NEW",
}

export type UnionMessage = MessageNavigation;

export type MessageNavigation = {
  typeMessage: KEY_MESSAGE.NAVIGATION_SAME | KEY_MESSAGE.NAVIGATION_NEW;
  url: string;
};
