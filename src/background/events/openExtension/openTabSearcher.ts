/* --------------- To Do ----------------- 
TODO: [Refactorizar Nombre]: openSearcherInNewTab
TODO: Refactorizar URL ----> crear "variable centralizada"
TODO: runtime.lastError
*/

export function openTabSearcher() {
  chrome.tabs.create({
    url: chrome.runtime.getURL("src/searcher/searcher.html"),
    active: true,
  });
}
