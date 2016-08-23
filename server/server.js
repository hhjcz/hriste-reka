/** Created by hhj on 8/18/16. */
require('babel-register')({})
const express = require('express')
const path = require('path')
const loadEnv = require('./loadEnv')
const constants = require('./constants')

loadEnv()
const PORT = process.env.PORT || 8080 // e.g. heroku.com sets env.PORT
const isDevelopment = process.env.NODE_ENV === 'development'

const app = express()

// dev & hot middleware (in dev only - packages may not be installed at all):
if (isDevelopment) {
  try {
    const webpack = require('webpack')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const makeWebpackConfig = require('./makeWebpackConfig')

    const compiler = webpack(makeWebpackConfig({ isDevelopment, useCssModules: true }))
    app.use(webpackDevMiddleware(compiler, { noInfo: true, colors: true }));
    app.use(webpackHotMiddleware(compiler));
  } catch (e) {
    console.log('Applying webpack dev & hot middleware failed, skipping. Error thrown: ', e)
  }
}

app.use('/', express.static(constants.PUBLIC_DIR))
app.use('/', express.static(constants.BUILD_DIR))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
