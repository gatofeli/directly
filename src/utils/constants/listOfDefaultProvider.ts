import { ProviderType } from "../lib/storage/type";
import { KEYWORD } from "./default";

const entertainment = [
  {
    alias: "Youtube",
    url: `https://www.youtube.com/results?search_query=${KEYWORD}`,
  },
  {
    alias: "Twitch",
    url: `https://www.twitch.tv/search?term=${KEYWORD}`,
  },
  {
    alias: "Spotify",
    url: `https://open.spotify.com/search/${KEYWORD}`,
  },
  {
    alias: "AnimeFlv (calidad)",
    url: `https://animeflv.ac/animes/buscar/?nombre=${KEYWORD}`,
  },
  {
    alias: "AnimeFlv",
    url: `https://www3.animeflv.net/browse?q=${KEYWORD}`,
  },
  {
    alias: "Aniwatch",
    url: `https://aniwatchtv.to/search?keyword=${KEYWORD}`,
  },
  {
    alias: "Netflix",
    url: `https://www.netflix.com/search?q=${KEYWORD}`,
  },
];
const programming = [
  {
    alias: "Github",
    url: `https://github.com/search?q=${KEYWORD}`,
  },
  {
    alias: "MDN",
    url: `https://developer.mozilla.org/en-US/search?q=${KEYWORD}`,
  },
  {
    alias: "Chrome Extension",
    url: `https://developer.chrome.com/s/results?hl=es-419&q=${KEYWORD}#gsc.tab=0&gsc.q=${KEYWORD}&gsc.sort=`,
  },
];
const information = [
  {
    alias: "Wikipedia",
    url: `https://es.wikipedia.org/wiki/${KEYWORD}`,
  },
];
const shopping = [
  {
    alias: "Amazon",
    url: `https://www.amazon.es/s?k=${KEYWORD}`,
  },
];
const dictionaries = [
  {
    alias: "DeepL EN-ES",
    url: `https://www.deepl.com/es/translator#en/es/${KEYWORD}`,
  },
  {
    alias: "DeepL ES-EN",
    url: `https://www.deepl.com/es/translator#es/en/${KEYWORD}`,
  },
];
const random = [
  {
    alias: "WikiDex",
    url: `https://www.wikidex.net/index.php?search=${KEYWORD}&title=Especial%3ABuscar&profile=advanced&fulltext=1&ns0=1`,
  },
];

export const DEFAULT_PROVIDER: StorageProviderDefault = {
  Entretenimiento: entertainment,
  Programación: programming,
  Información: information,
  Compras: shopping,
  Diccionario: dictionaries,
  Frikadas: random,
};

type StorageProviderDefault = { [key: string]: ProviderType[] };
