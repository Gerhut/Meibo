const { BrowserWindow } = require('electron')

const { version } = require('../package.json')

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

const contents = window.webContents
contents.setUserAgent(`${contents.getUserAgent()} Meibo/${version}`)

window.on('close', (event) => {
  window.hide()
  event.preventDefault()
})
window.loadURL('http://m.weibo.cn/')
