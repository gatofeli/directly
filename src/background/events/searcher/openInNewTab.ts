export async function openInNewTab() {
  try {
    await chrome.tabs.create({
      url: chrome.runtime.getURL("src/searcher/searcher.html"),
      active: true,
    });
  } catch {
    //!--------------------------- Aviso +  ¿ funcion contadora + setTimeout() ?
  }
}
