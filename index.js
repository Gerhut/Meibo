const { app } = require('electron')

app.on('ready', require('./lib/bootstrap'))
