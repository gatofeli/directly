import { KEY_MESSAGE, unionMessage } from "../utils/message/types";
import { navigateInNewTab } from "./events/message/navegation/navigateInNewTab";
import { navigateInSameTab } from "./events/message/navegation/navigateInSameTab";
import { openTabSearcher } from "./events/openExtension/openTabSearcher";

chrome.commands.onCommand.addListener(() => {
  openTabSearcher();
});
chrome.action.onClicked.addListener(() => {
  openTabSearcher();
});

chrome.runtime.onMessage.addListener((msg: unionMessage, sender) => {
  try {
    const typeMessage: KEY_MESSAGE | undefined = msg.typeMessage;
    if (typeof typeMessage === "undefined") {
      //!--------------------------------- Error no hay typeMessage
      return;
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

chrome.runtime.onInstalled.addListener(async () => {
  await chrome.storage.local.clear();
  chrome.storage.local.set({
    searchProviders: [
      {
        alias: "Youtube",
        url: "https://www.youtube.com/results?search_query=--shortcutSearchExtension--",
      },
      {
        alias: "Twitch",
        url: "https://www.twitch.tv/search?term=--shortcutSearchExtension--",
      },
      {
        alias: "MDN",
        url: "https://developer.mozilla.org/en-US/search?q=--shortcutSearchExtension--",
      },
      {
        alias: "Extension",
        url: "https://developer.chrome.com/s/results?hl=es-419&q=--shortcutSearchExtension--#gsc.tab=0&gsc.q=--shortcutSearchExtension--&gsc.sort=",
      },
      {
        alias: "Github [Repo]",
        url: "https://github.com/search?q=--shortcutSearchExtension--&type=repositories",
      },
      {
        alias: "Github [User]",
        url: "https://github.com/search?q=--shortcutSearchExtension--&type=users",
      },
      {
        alias: "Anime.ac",
        url: "https://animeflv.ac/animes/buscar/?nombre=--shortcutSearchExtension--",
      },
      {
        alias: "Anime",
        url: "https://www3.animeflv.net/browse?q=--shortcutSearchExtension--",
      },
      {
        alias: "Aniwatch",
        url: "https://aniwatchtv.to/search?keyword=--shortcutSearchExtension--",
      },
    ],
    _config_: {},
  });
});
