const { app, BrowserWindow, ipcMain } = require('electron')

const opener = require('opener')

const window = module.exports = new BrowserWindow({
  width: 320,
  height: 480,
  minWidth: 320,
  minHeight: 480,
  maxWidth: 320,
  frame: false,
  webPreferences: {
    nodeIntegration: false,
    preload: require.resolve('./preload')
  }
})
window.loadURL(global.HOME)

const contents = window.webContents
contents.setUserAgent(`${contents.getUserAgent()} ${app.getName()}/${app.getVersion()}`)
contents.on('will-navigate', (event, url) => {
  if (!url.startsWith(global.HOME)) {
    event.preventDefault()
    opener(url)
  }
})
contents.on('new-window', (event, url) => {
  event.preventDefault()
  opener(url)
})

ipcMain.on('hide', () => {
  window.hide()
  window.loadURL(global.HOME)
})
