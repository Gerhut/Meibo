const { app } = require('electron')

module.exports = () => {
  require('./window')
  require('./tray')

  app.dock && app.dock.hide()
  app.on('before-quit', () => app.exit(0))
}
