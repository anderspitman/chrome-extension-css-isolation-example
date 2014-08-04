chrome.runtime.onMessage.addListener(function(message, sender) {
  chrome.tabs.sendMessage(sender.tab.id, message);
});
