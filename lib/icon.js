const { nativeImage } = require('electron')

const { resolve } = require('path')

exports.size16 = nativeImage.createFromPath(resolve(__dirname, '../icon16.png'))
exports.size16.setTemplateImage(true)
