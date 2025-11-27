import { URL_BROWSER_NEW_TAB } from "@utils/constants/regex";
import { openInNewTab } from "./openInNewTab"

export  async function openInCurrentTab(tab: chrome.tabs.Tab | undefined){
   try {
   if (typeof tab?.id === "undefined" || typeof tab?.url === "undefined") {
      openInNewTab();
      return;
   }

   const {id, url} = tab
   

   if(URL_BROWSER_NEW_TAB.test(url)){
      chrome.tabs.remove(id)
      openInNewTab();
      return;
   }

   await chrome.scripting.executeScript({target: {tabId:id}, files: ['script.js']}) 

   } catch {
      openInNewTab();
   }
}

