import { useEffect, useState } from "react";
import { ApiError, ApiOperation } from "../../utils/error/apiError";
import { controller } from "../../utils/lib/storage/Controller";

export function useListOfProviders() {
  const [providerList, setProviderList] = useState([]);
  const [errorProviderList, setErrorProviderList] = useState(false);

  useEffect(() => {
    const fetchProviderList = async () => {
      try {
        //*---------- Descomentar
        // const newProviders = await controller.fetchProviders(); 

        //!---------- Eliminar
        const newProviders = [
          {
            alias: "Youtube",
            url: "https://www.youtube.com/results?search_query=--DirectlyExtension--",
          },
          {
            alias: "Wikipedia",
            url: "https://es.wikipedia.org/wiki/--DirectlyExtension--",
          },
          {
            alias: "Twitch",
            url: "https://www.twitch.tv/search?term=--DirectlyExtension--",
          },
          {
            alias: "DeepL EN-ES",
            url: "https://www.deepl.com/es/translator#en/es/--DirectlyExtension--",
          },
          {
            alias: "DeepL ES-EN",
            url: "https://www.deepl.com/es/translator#es/en/--DirectlyExtension--",
          },
          {
            alias: "Amazon",
            url: "https://www.amazon.es/s?k=--DirectlyExtension--",
          },
          {
            alias: "Github",
            url: "https://github.com/search?q=--DirectlyExtension--",
          },
          {
            alias: "MDN",
            url: "https://developer.mozilla.org/en-US/search?q=--DirectlyExtension--",
          },
          {
            alias: "Chrome Extension",
            url: "https://developer.chrome.com/s/results?hl=es-419&q=--DirectlyExtension--#gsc.tab=0&gsc.q=--DirectlyExtension--&gsc.sort=",
          },
          {
            alias: "Spotify",
            url: "https://open.spotify.com/search/--DirectlyExtension--",
          },
          {
            alias: "Anime Flv (calidad)",
            url: "https://animeflv.ac/animes/buscar/?nombre=--DirectlyExtension--",
          },
          {
            alias: "Anime Flv",
            url: "https://www3.animeflv.net/browse?q=--DirectlyExtension--",
          },
          {
            alias: "Aniwatch",
            url: "https://aniwatchtv.to/search?keyword=--DirectlyExtension--",
          },
          {
            alias: "WikiDex",
            url: "https://www.wikidex.net/index.php?search=--DirectlyExtension--&title=Especial%3ABuscar&profile=advanced&fulltext=1&ns0=1",
          },
          {
            alias: "Netflix",
            url: "https://www.netflix.com/search?q=--DirectlyExtension--",
          },
        ];


        setProviderList(newProviders);
      } catch (error) {
        if (error instanceof ApiError !== false) {
          console.error("[searcher] Get provider list - unexpected error", error);
          setErrorProviderList(true);
          return;
        }

        if (error.operation === ApiOperation.STORAGE_SET) {
          setProviderList(error.fallback);
          return;
        }

        console.error("[searcher] Get provider list - Chrome API error", error);
        setErrorProviderList(true);
      }
    };

    fetchProviderList();
  }, []);



  return { providerList, errorProviderList };
}
