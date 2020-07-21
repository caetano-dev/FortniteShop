const { app, BrowserWindow } = require("electron");
var path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile("index.html");
  win.once("ready-to-show", () => {
    win.show();
  });
}
app.whenReady().then(createWindow);
