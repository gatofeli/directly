/* --------------- To Do ----------------- 
TODO: Refactorizar URL Magic String
todo: mediante un parametro que se pueda optar por: NEW_TAB || CURRENT_TAB
todo: generar el currentTab() ----> encapsular porque hara falta una validacion de que se pueda abrir en esa pestaña
TODO: runtime.lastError

TODO: testear
*/

export function openTabSearcher() {
  chrome.tabs.create({
    url: chrome.runtime.getURL("src/searcher/searcher.html"),
    active: true,
  });
}
