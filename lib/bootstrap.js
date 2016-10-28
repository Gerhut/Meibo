const { app } = require('electron')

module.exports = () => {
  const window = require('./window')
  require('./tray')

  if (app.dock != null) {
    app.dock.hide()
  }
  app.on('before-quit', () => {
    window.removeAllListeners('close')
  })
}
