import { openInNewTab } from "./events/openInNewTab";
import {openInCurrentTab} from "./events/openInCurrentTab"

chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "openInCurrentTab") {
    openInCurrentTab(tab);
    return;
  } 
  
  openInNewTab();
});

//! Provisional
chrome.action.onClicked.addListener(() => {
  openInNewTab();
});
