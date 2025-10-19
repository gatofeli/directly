import { internalMessage } from "../utils/message/InternalMessage";
import { readerMessage } from "./events/message/readerMessage";
import { openTabSearcher } from "./events/openExtension/openTabSearcher";

chrome.commands.onCommand.addListener(() => {
  openTabSearcher();
});
chrome.action.onClicked.addListener(() => {
  openTabSearcher();
});
chrome.runtime.onInstalled.addListener(async () => {
  await chrome.storage.local.clear();
  chrome.storage.local.get({
    _dataURLs_: [
      {
        name: "Youtube",
        url: "https://www.youtube.com/results?search_query=--shortcutSearchExtension--",
      },
      {
        name: "Twitch",
        url: "https://www.twitch.tv/search?term=--shortcutSearchExtension--",
      },
      {
        name: "MDN",
        url: "https://developer.mozilla.org/en-US/search?q=--shortcutSearchExtension--",
      },
      {
        name: "Extension",
        url: "https://developer.chrome.com/s/results?hl=es-419&q=--shortcutSearchExtension--#gsc.tab=0&gsc.q=--shortcutSearchExtension--&gsc.sort=",
      },
      {
        name: "Github [Repo]",
        url: "https://github.com/search?q=--shortcutSearchExtension--&type=repositories",
      },
      {
        name: "Github [User]",
        url: "https://github.com/search?q=--shortcutSearchExtension--&type=users",
      },
      {
        name: "Anime.ac",
        url: "https://animeflv.ac/animes/buscar/?nombre=--shortcutSearchExtension--",
      },
      {
        name: "Anime",
        url: "https://www3.animeflv.net/browse?q=--shortcutSearchExtension--",
      },
      {
        name: "Aniwatch",
        url: "https://aniwatchtv.to/search?keyword=--shortcutSearchExtension--",
      },
    ],
    _config_: {},
  });
});

chrome.runtime.onMessage.addListener((msg, sender) => {
  try {
    const [key, data] = internalMessage.extractMessage(msg);
    readerMessage(key, data, sender);
  } catch {
    //! --------------------------------------
  }
});
