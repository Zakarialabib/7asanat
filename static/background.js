chrome.runtime.onInstalled.addListener(() => {
  // Set up the default settings for the extension
  chrome.storage.sync.set({
    language: 'en', // Default language is English
    quoteInterval: 5000, // Default quote interval is 5000ms (5 seconds)
    showNotification: true, // Default behavior is to show notifications
  });
});

chrome.runtime.onMessage.addListener((request, sendResponse) => {
  if (request.type === 'getSettings') {
    chrome.storage.sync.get(['language', 'quoteInterval', 'showNotification'], (result) => {
      sendResponse(result);
    });
  }
  return true;
});
