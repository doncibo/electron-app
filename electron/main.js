const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');
 
let mainWindow;
 
function createWindow() {
    mainWindow = new BrowserWindow({
        webPreferences: {
            contextIsolation: true
          },        
        width:800,
        height:600,
        show: true
    });
    // const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
    const startURL = 'http://localhost:3000'
    mainWindow.loadURL(startURL);
    // mainWindow.webContents.openDevTools()
 
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('certificate-error', function(event, webContents, url, error, 
        certificate, callback) {
            event.preventDefault();
            callback(true);
      });
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}
app.on('ready', createWindow);