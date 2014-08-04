var iframe = document.createElement('iframe');
iframe.src = chrome.extension.getURL("popup.html");
iframe.className = 'css-isolation-popup';
iframe.frameBorder = 0;
document.body.appendChild(iframe);

chrome.runtime.onMessage.addListener(function(message) {
  if (message == 'hide_popup') {
    iframe.style.display = 'none';
  }
});
