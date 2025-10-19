// import { STORAGE_KEYS } from "../utils/constants/storageKeys";
import { KEY_MESSAGE, UnionMessage } from "../utils/lib/message/requestNavigation";
import { navigateInNewTab } from "./events/message/navegation/navigateInNewTab";
import { navigateInSameTab } from "./events/message/navegation/navigateInSameTab";
import { openInNewTab } from "./events/searcher/openInNewTab";

chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "openInSameTab" && tab?.id == undefined) {
    //todo: openInSameTab(tab.id....)
  } else {
    openInNewTab();
  }
});
chrome.action.onClicked.addListener(() => {
  //todo: revisar los commands
  //todo: abrir Add
  openInNewTab(); //todo: ------------ borrar
});

chrome.runtime.onMessage.addListener((msg: UnionMessage, sender) => {
  try {
    const { typeMessage } = msg;

    if (typeof typeMessage === "undefined") {
      //!--------------------------------- Error no hay typeMessage
    }

    const ACTIONS = {
      [KEY_MESSAGE.NAVIGATION_NEW]: () => navigateInNewTab(msg.url),
      [KEY_MESSAGE.NAVIGATION_SAME]: () => navigateInSameTab(msg.url, sender.tab?.id),
    };
    ACTIONS[typeMessage]();
  } catch {
    //! --------------------------------------
  }
});

// chrome.runtime.onInstalled.addListener(async () => {
//   await chrome.storage.local.clear();
//   chrome.storage.local.set({
//     [STORAGE_KEYS.PROVIDERS]: [
//       {
//         alias: "Youtube",
//         url: "https://www.youtube.com/results?search_query=--DirectlyExtension--",
//       },
//       {
//         alias: "Wikipedia",
//         url: "https://es.wikipedia.org/wiki/--DirectlyExtension--",
//       },
//       {
//         alias: "Twitch",
//         url: "https://www.twitch.tv/search?term=--DirectlyExtension--",
//       },
//       {
//         alias: "DeepL EN-ES",
//         url: "https://www.deepl.com/es/translator#en/es/--DirectlyExtension--",
//       },
//       {
//         alias: "DeepL ES-EN",
//         url: "https://www.deepl.com/es/translator#es/en/--DirectlyExtension--",
//       },
//       {
//         alias: "Amazon",
//         url: "https://www.amazon.es/s?k=--DirectlyExtension--",
//       },
//       {
//         alias: "Github",
//         url: "https://github.com/search?q=--DirectlyExtension--",
//       },
//       {
//         alias: "MDN",
//         url: "https://developer.mozilla.org/en-US/search?q=--DirectlyExtension--",
//       },
//       {
//         alias: "Chrome Extension",
//         url: "https://developer.chrome.com/s/results?hl=es-419&q=--DirectlyExtension--#gsc.tab=0&gsc.q=--DirectlyExtension--&gsc.sort=",
//       },
//       {
//         alias: "Spotify",
//         url: "https://open.spotify.com/search/--DirectlyExtension--",
//       },
//       {
//         alias: "Anime Flv (calidad)",
//         url: "https://animeflv.ac/animes/buscar/?nombre=--DirectlyExtension--",
//       },
//       {
//         alias: "Anime Flv",
//         url: "https://www3.animeflv.net/browse?q=--DirectlyExtension--",
//       },
//       {
//         alias: "Aniwatch",
//         url: "https://aniwatchtv.to/search?keyword=--DirectlyExtension--",
//       },
//       {
//         alias: "WikiDex",
//         url: "https://www.wikidex.net/index.php?search=--DirectlyExtension--&title=Especial%3ABuscar&profile=advanced&fulltext=1&ns0=1",
//       },
//       {
//         alias: "Netflix",
//         url: "https://www.netflix.com/search?q=--DirectlyExtension--",
//       },
//     ],
//     [STORAGE_KEYS.CONFIG]: {},
//   });
// });
