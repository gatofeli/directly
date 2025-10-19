export async function navigateInNewTab(url: string) {
  try {
    await chrome.tabs.create({ url, active: false });
  } catch {
    //!--------------------------- Aviso +  ¿ funcion contadora + setTimeout() ?
  }
}
