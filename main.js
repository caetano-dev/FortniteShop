const { app, BrowserWindow } = require("electron");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadFile("./public/shop.html");
  win.once("ready-to-show", () => {
    win.show();
  });
}
app.whenReady().then(createWindow);
