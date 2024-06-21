'use strict'

const codepoints = require('./font/gay-web-icons.json')

module.exports = {
  inputDir: './icons',
  outputDir: './font',
  fontTypes: ['woff2', 'woff', 'ttf', 'svg', 'eot'],
  assetTypes: ['css', 'scss', 'json'],
  name: 'gay-web-icons',
  codepoints,
  prefix: 'gwi',
  selector: '.gwi',
  fontsUrl: './fonts',
  formatOptions: {
    json: {
      indent: 2
    }
  },
  // Use our custom Handlebars templates
  templates: {
    css: './build/font/css.hbs',
    scss: './build/font/scss.hbs'
  },
  pathOptions: {
    json: './font/gay-web-icons.json',
    css: './font/gay-web-icons.css',
    scss: './font/gay-web-icons.scss',
    woff: './font/fonts/gay-web-icons.woff',
    woff2: './font/fonts/gay-web-icons.woff2'
  }
}
