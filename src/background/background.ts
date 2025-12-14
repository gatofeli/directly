import { openInNewTab } from "./events/openInNewTab";

// chrome.commands.onCommand.addListener((command, tab) => {
//   if (command === "openInSameTab" && tab?.id == undefined) {
//     //todo: ------------------------
//   } else {
//     openInNewTab();
//   }
// });

chrome.action.onClicked.addListener(() => {
  openInNewTab();
});
