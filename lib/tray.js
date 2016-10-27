const { Tray, ipcMain } = require('electron')

const icon = require('./icon')
const window = require('./window')

const tray = module.exports = new Tray(icon.size16)

tray.on('click', () => window.show())

ipcMain.on('count', (event, count) => tray.setTitle(count))
