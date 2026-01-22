import { ProviderType } from "../lib/storage/type";
import { KEYWORD } from "./default";

const entertainment: ProviderType[] = [
  {
    alias: "Youtube",
    url: `https://www.youtube.com/results?search_query=${KEYWORD}`,
  },
  {
    alias: "Twitch",
    url: `https://www.twitch.tv/search?term=${KEYWORD}`,
  },

  {
    alias: "Netflix",
    url: `https://www.netflix.com/search?q=${KEYWORD}`,
  },
  {
    alias: "Prime Video",
    url: `https://www.primevideo.com/region/eu/search/ref=atv_nb_sug?ie=UTF8&phrase=${KEYWORD}`,
  },
  {
    alias: "HBO",
    url: `https://play.hbomax.com/search/result?q=${KEYWORD}`,
  },
  {
    alias: "Apple TV",
    url: `https://tv.apple.com/us/search?term=${KEYWORD}`,
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
    alias: "Archive.org (anime)",
    url: `https://archive.org/details/anime?tab=collection&query=${KEYWORD}`,
  },

  {
    alias: "IMDB",
    url: `https://www.imdb.com/es-es/find/?q=${KEYWORD}`,
  },
  {
    alias: "Dailymotion",
    url: `https://www.dailymotion.com/search/${KEYWORD}`,
  },
];
const music: ProviderType[] = [
  {
    alias: "Spotify",
    url: `https://open.spotify.com/search/${KEYWORD}`,
  },
  {
    alias: "SoundCloud",
    url: `https://soundcloud.com/search?q=${KEYWORD}`,
  },
  {
    alias: "Bandcamp",
    url: `https://bandcamp.com/search?q=${KEYWORD}`,
  },
];
const shopping: ProviderType[] = [
  {
    alias: "Amazon",
    url: `https://www.amazon.es/s?k=${KEYWORD}`,
  },
  {
    alias: "AliExpress",
    url: `https://es.aliexpress.com/w/wholesale-${KEYWORD}.html`,
  },
  {
    alias: "eBay",
    url: `https://www.ebay.es/sch/i.html?_nkw=${KEYWORD}`,
  },

  {
    alias: "PCcomponentes",
    url: `https://www.pccomponentes.com/search/?query=${KEYWORD}`,
  },

  {
    alias: "Vinted",
    url: `https://www.vinted.es/catalog?search_text=${KEYWORD}`,
  },
  {
    alias: "Wallapop",
    url: `https://es.wallapop.com/search?keywords=${KEYWORD}&order_by=most_relevance`,
  },

  {
    alias: "Nintendo Shop",
    url: `https://store.nintendo.es/es/search?q=${KEYWORD}`,
  },
  {
    alias: "Steam",
    url: `https://store.steampowered.com/search/?term=${KEYWORD}`,
  },
  {
    alias: "Instant Gaming",
    url: `https://www.instant-gaming.com/es/busquedas/?query=${KEYWORD}`,
  },
  {
    alias: "Humble Bundle",
    url: `https://www.humblebundle.com/store/search?search=${KEYWORD}`,
  },
  {
    alias: "Itch.io",
    url: `https://itch.io/search?q=${KEYWORD}`,
  },
];
const books: ProviderType[] = [
  {
    alias: "Open library",
    url: `https://openlibrary.org/search?q=${KEYWORD}&mode=ebooks&has_fulltext=true`,
  },
  {
    alias: "Smash words",
    url: `https://www.smashwords.com/books/search?query=${KEYWORD}`,
  },
  {
    alias: "Goodreads",
    url: `https://www.goodreads.com/search?q=${KEYWORD}`,
  },
  {
    alias: "Archive.org (manga)",
    url: `https://archive.org/details/manga_library?tab=collection&query=${KEYWORD}`,
  },
];
const information: ProviderType[] = [
  {
    alias: "Wikipedia",
    url: `https://es.wikipedia.org/wiki/${KEYWORD}`,
  },
  {
    alias: "Google Académico",
    url: `https://scholar.google.es/scholar?q=${KEYWORD}`,
  },

  {
    alias: "Medium",
    url: `https://medium.com/search?q=${KEYWORD}`,
  },
  {
    alias: "Pinterest",
    url: `https://es.pinterest.com/search/pins/?q=${KEYWORD}`,
  },

  {
    alias: "Reddit",
    url: `https://www.reddit.com/search/?q=${KEYWORD}`,
  },
  {
    alias: "Quora",
    url: `https://es.quora.com/search?q=${KEYWORD}`,
  },
  {
    alias: "Fandom",
    url: `https://community.fandom.com/wiki/Special:Search?scope=internal&navigationSearch=true&query=${KEYWORD}`,
  },

  {
    alias: "WikiDex",
    url: `https://www.wikidex.net/index.php?search=${KEYWORD}&title=Especial%3ABuscar&profile=advanced&fulltext=1&ns0=1`,
  },
  {
    alias: "Metacritic",
    url: `https://www.metacritic.com/search/${KEYWORD}`,
  },
];
const development: ProviderType[] = [
  {
    alias: "GitHub",
    url: `https://github.com/search?q=${KEYWORD}`,
  },

  {
    alias: "MDN",
    url: `https://developer.mozilla.org/en-US/search?q=${KEYWORD}`,
  },
  {
    alias: "DevDocs",
    url: `https://devdocs.io/#q=${KEYWORD}`,
  },

  {
    alias: "npm",
    url: `https://www.npmjs.com/search?q=${KEYWORD}`,
  },

  {
    alias: "Python",
    url: `https://www.python.org/search/?q=${KEYWORD}`,
  },
  {
    alias: "Docker",
    url: `https://www.docker.com/?s=${KEYWORD}`,
  },
  {
    alias: "Bun",
    url: `https://bun.com/docs?search=${KEYWORD}`,
  },
  {
    alias: "Chrome Extension",
    url: `https://developer.chrome.com/s/results?hl=es-419&q=${KEYWORD}#gsc.tab=0&gsc.q=${KEYWORD}&gsc.sort=`,
  },
];
const tools: ProviderType[] = [
  {
    alias: "DeepL EN-ES",
    url: `https://www.deepl.com/es/translator#en/es/${KEYWORD}`,
  },
  {
    alias: "DeepL ES-EN",
    url: `https://www.deepl.com/es/translator#es/en/${KEYWORD}`,
  },
  {
    alias: "Word Reference EN-ES",
    url: `https://www.wordreference.com/enes/${KEYWORD}`,
  },
  {
    alias: "Word Reference ES-EN",
    url: `https://www.wordreference.com/esen/${KEYWORD}`,
  },
];

export const DEFAULT_PROVIDER: DefaultList = {
  Entretenimiento: entertainment,
  Música: music,
  Compras: shopping,
  libros: books,
  Información: information,
  Programación: development,
  Herramientas: tools,
};

type DefaultList = { [key: string]: ProviderType[] };
