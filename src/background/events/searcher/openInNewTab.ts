export function openInNewTab() {
  chrome.tabs.create({
    url: chrome.runtime.getURL("src/searcher/searcher.html"),
    active: true,
  });
}
