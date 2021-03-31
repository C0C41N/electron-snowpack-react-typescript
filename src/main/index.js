const { app, BrowserWindow, screen } = require('electron');
const path = require('path');
const url = require('url');

let win = null;
const args = process.argv.slice(1),
  serve = args.some((val) => val === '--serve');

function createWindow() {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: serve ? true : false,
      contextIsolation: false, // false if you want to run 2e2 test with Spectron
      enableRemoteModule: true, // true if you want to run 2e2 test  with Spectron or use remote module in renderer context (ie. Angular)
    },
  });

  win.removeMenu();
  win.maximize();

  if (serve) {
    win.webContents.openDevTools();
    win.loadURL('http://localhost:8080');
  } else {
    win.webContents.openDevTools();

    win.loadURL(
      url.format({
        pathname: path.join(__dirname, '../../build/index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  }

  win.on('closed', () => {
    win = null;
  });

  return win;
}

try {
  app.on('ready', () => setTimeout(createWindow, 400));

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });
} catch (e) {
  //
}
