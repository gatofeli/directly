//1. Definir el nuevo tipo de mensaje
export type MsgNavigation = { url: string };

//2. Añadirlo para que se tenga en cuenta como un nuevo tipo de mensaje valido
export type UnionMsg = MsgNavigation;

//3. Añadir su key_action al enum
export enum KEY_MESSAGE {
  NAVIGATION_SAME = "NAVIGATION_SAME",
  NAVIGATION_NEW = "NAVIGATION_NEW",
}

//4. Relacionar el enum con el nuevo tipo de mensaje
export type Message = {
  [KEY_MESSAGE.NAVIGATION_NEW]?: MsgNavigation;
  [KEY_MESSAGE.NAVIGATION_SAME]?: MsgNavigation;
};

//5. Definir el tipado de la funcion que se ejecutará con ese mensaje
export type ACTIONS = {
  [KEY_MESSAGE.NAVIGATION_SAME]: (data: MsgNavigation, sender: chrome.runtime.MessageSender) => void;
  [KEY_MESSAGE.NAVIGATION_NEW]: (data: MsgNavigation) => void;
};
