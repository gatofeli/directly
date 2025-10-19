export async function navigateInSameTab(url: string, id?: number) {
  if (typeof id !== "number") {
    //! ------------------------------------------------------ Aviso
    //! ------------------------------------------------------ navigateInNewTab()
    return;
  }

  await chrome.tabs.update(id, { url });

  if (chrome.runtime.lastError) {
    //! ------------------------------------------------------ Aviso
    //! ------------------------------------------------------ navigateInNewTab() ¿con setTimeout()?
  }
}
