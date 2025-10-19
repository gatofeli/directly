export enum KEY_MESSAGE {
  NAVIGATION_SAME = "NAVIGATION_SAME",
  NAVIGATION_NEW = "NAVIGATION_NEW",
}

export type unionMessage = messageNavigation;

export type messageNavigation = {
  typeMessage: KEY_MESSAGE.NAVIGATION_SAME | KEY_MESSAGE.NAVIGATION_NEW;
  url: string;
};
