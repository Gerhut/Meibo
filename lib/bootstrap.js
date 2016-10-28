const { app } = require('electron')

global.HOME = 'http://m.weibo.cn/'

module.exports = () => {
  app.dock && app.dock.hide()

  require('./window')
  require('./tray')
}
