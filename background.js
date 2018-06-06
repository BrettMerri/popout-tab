const popoutTab = () => {
  chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    tab = tabs[0];

    if (tab === undefined) {
      console.log('Error: tab is undefined');
      return;
    }

    tabId = tab.id;

    if (tabId === undefined) {
      console.log('Error: tabId is undefined');
      return;
    }

    chrome.windows.getCurrent(window => {
      chrome.windows.create({ state: window.state, tabId: tab.id });
    });
  });
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "popoutTab",
    "title": "Popout tab",
  });
});

chrome.commands.onCommand.addListener(popoutTab);
chrome.contextMenus.onClicked.addListener(popoutTab);
