export async function navigateInSameTab(url: string, id?: number) {
  try {
    if (typeof id !== "number") {
      throw new Error("--------------------------------------------------------");
    }

    await chrome.tabs.update(id, { url });
  } catch {
    //! ----------------------|number|---------- Aviso + navigateInNewTab()
    //! ----------------------|API|------------- Aviso + navigateInNewTab() ¿con funcion contadora + setTimeout()?
  }
}
