const { Tray, ipcMain } = require('electron')

const icon = require('./icon')
const window = require('./window')

const tray = module.exports = new Tray(icon.size16)
tray.on('click', () => {
  if (window.isVisible()) return
  window.show()
  window.loadURL(global.HOME)
})

ipcMain.on('title', (event, title) => tray.setTitle(title))
