document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('shortcut-link').addEventListener('click', () => {
      chrome.tabs.update({ url: 'chrome://extensions/shortcuts' });
  });
  chrome.commands.getAll(commands => {
    const command = commands[0];
    document.getElementById('shortcut').textContent = command.shortcut || 'none';
  });
});
