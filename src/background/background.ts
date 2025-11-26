import { openInNewTab } from "./events/openInNewTab";
import {openInCurrentTab} from "./events/openInCurrentTab"

chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "openInCurrentTab" && tab?.id != undefined) {
    openInCurrentTab(tab.id);
    return;
  } 
  
  openInNewTab();
});

//! Provisional
chrome.action.onClicked.addListener(() => {
  openInNewTab();
});
