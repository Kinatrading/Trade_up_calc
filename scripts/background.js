chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: chrome.runtime.getURL('window/index.html'),
    type: 'popup',
    width: 760,
    height: 720
  });
});
