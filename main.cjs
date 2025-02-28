const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  mainWindow.loadFile('index.html');
  //mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

ipcMain.on('toMain', (event, args) => {
  console.log(args);
  event.sender.send('fromMain', 'Data received on main process');
});

// Listen for file read requests from renderer
ipcMain.handle('read-file', async (event, filePath) => {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
