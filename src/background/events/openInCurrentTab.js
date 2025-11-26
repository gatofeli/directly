import { openInNewTab } from "./openInNewTab"

export  async function openInCurrentTab(id){
   try {
       await chrome.tabs.sendMessage(id,undefined)
   } catch {
        openInNewTab();
   }
}