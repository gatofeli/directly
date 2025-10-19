export async function navigateInNewTab(url: string) {
  await chrome.tabs.create({ url, active: false });

  if (chrome.runtime.lastError) {
    //! ------------------------------------------------------ Aviso
  }
}
