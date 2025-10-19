/* ------------------------- To Do ----------------------------
TODO: Hacer que el tipado de los datos sean reutilizables
*/

import { SearchForm } from "./components/SearchForm";
const fetchChrome: { name: string; url: string; id: number; alert: boolean }[] = [
  {
    name: "Youtube",
    url: "https://www.youtube.com/results?search_query=--shortcutSearchExtension--",
    id: 1,
    alert: false,
  },
  {
    name: "Twitch",
    url: "https://www.twitch.tv/search?term=--shortcutSearchExtension--",
    id: 2,
    alert: false,
  },
  {
    name: "MDN",
    url: "https://developer.mozilla.org/en-US/search?q=--shortcutSearchExtension--",
    id: 3,
    alert: false,
  },
  {
    name: "Extension",
    url: "https://developer.chrome.com/s/results?hl=es-419&q=--shortcutSearchExtension--#gsc.tab=0&gsc.q=--shortcutSearchExtension--&gsc.sort=",
    id: 4,
    alert: false,
  },
  {
    name: "Github [Repo]",
    url: "https://github.com/search?q=--shortcutSearchExtension--&type=repositories",
    id: 5,
    alert: false,
  },
  {
    name: "Github [User]",
    url: "https://github.com/search?q=--shortcutSearchExtension--&type=users",
    id: 6,
    alert: false,
  },
  {
    name: "Anime.ac",
    url: "https://animeflv.ac/animes/buscar/?nombre=--shortcutSearchExtension--",
    id: 7,
    alert: false,
  },
  {
    name: "Anime",
    url: "https://www3.animeflv.net/browse?q=--shortcutSearchExtension--",
    id: 8,
    alert: true,
  },
  {
    name: "Aniwatch",
    url: "https://aniwatchtv.to/search?keyword=--shortcutSearchExtension--",
    id: 9,
    alert: false,
  },
];

//------------------------------------------

export function App() {
  return (
    <main>
      <SearchForm>{fetchChrome}</SearchForm>
    </main>
  );
}
