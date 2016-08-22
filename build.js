/** Created by hhj on 8/22/16. */
require('babel-register')({})
require('./loadEnv')()
const webpack = require('webpack')

const makeWebpackConfig = require('./makeWebpackConfig')

const isDevelopment = process.env.NODE_ENV !== 'production'
const compiler = webpack(makeWebpackConfig({ isDevelopment }))

function handleError(error) {
  console.error('Webpack build error: ', error)
  return error
}

function handleWarning(warning) {
  console.warn('Webpack build warning: ', warning)
  return warning
}

compiler.run((err, stats) => {
  if (err) return handleError(err)
  const jsonStats = stats.toJson()
  if (jsonStats.errors.length > 0) return handleError(jsonStats.errors)
  if (jsonStats.warnings.length > 0) handleWarning(jsonStats.warnings)

  if (!stats.hasErrors()) {
    console.log(stats.toString({ colors: true, chunks: false, modules: false, children: false }))
  }
  return null
})
