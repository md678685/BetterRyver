// Warning: You almost certainly do *not* want to edit this code - instead, you
// want to edit src/renderer/main.ts instead

window.onload = function() {
    try {
        var startTime = Date.now();

        // Skip "?loadSettings=".
        var loadSettings = JSON.parse(decodeURIComponent(location.search.substr(14)));

        var currentWindow = require('electron').remote.getCurrentWindow();
        var BetterRyver = require("betterryver");
        var betterRyver = new BetterRyver(currentWindow);
        betterRyver.init();

        window.loadSettings = loadSettings;

        require('./javascripts/renderer');
        require('electron').ipcRenderer.sendToHost('window-command', 'window:loaded');
    }
    catch (error) {
        var currentWindow = require('electron').remote.getCurrentWindow();

        currentWindow.show();
        currentWindow.openDevTools();

        console.error(error.stack || error);
    }
};
