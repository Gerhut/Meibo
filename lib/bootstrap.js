const { app } = require('electron')

global.HOME = 'http://m.weibo.cn/beta'

module.exports = () => {
  app.dock && app.dock.hide()

  require('./window')
  require('./tray')
}
