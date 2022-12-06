const path = require('path')
const outputPath = path.resolve(__dirname, '../public/abc/')
module.exports = {
  css: {
    requireModuleExtension: false
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/abc/' : './',
  outputDir: outputPath
}
