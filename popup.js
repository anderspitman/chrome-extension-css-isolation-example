var overlay = document.querySelector('.overlay');
overlay.addEventListener('click', function() {
  chrome.runtime.sendMessage('hide_popup');
});

