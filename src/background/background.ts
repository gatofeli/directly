import { openInNewTab } from "./events/openInNewTab";

chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "openInSameTab" && tab?.id == undefined) {
    //todo: openInSameTab(tab.id....)
  } else {
    openInNewTab();
  }
});

//! Provisional
chrome.action.onClicked.addListener(() => {
  openInNewTab();
});
