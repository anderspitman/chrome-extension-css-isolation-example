chrome.runtime.onMessage.addListener(function(message, sender) {
  if (message == 'hide_popup') {
    chrome.tabs.sendMessage(sender.tab.id, message);
  }
});
