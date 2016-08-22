import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'

/**
 * @param {Object} options
 * @returns {Object} config
 */
export default function makeWebpackConfig(options = { isDevelopment: false }) {

  const { isDevelopment } = options
  console.info(`Webpacking... (NODE_ENV=${process.env.NODE_ENV}, isDevelopment=${isDevelopment})`)

  const prefixLoaders = 'style-loader!css-loader!postcss-loader'

  const babelPresets = isDevelopment ? ['react-hmre'] : []

  const babelPlugins = ['add-module-exports']
  if (!isDevelopment) babelPlugins.push(/* 'transform-react-constant-elements', */)

  const config = {
    entry: {
      app: isDevelopment ? [
        'webpack-hot-middleware/client',
        './src/index.js'
      ] : [
        './src/index.js'
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].js',
      chunkFilename: '[name]-[hash].js',
      publicPath: '/'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          // babel query, merged with .babelrc:
          query: {
            cacheDirectory: true,
            presets: babelPresets,
            plugins: babelPlugins,
          },
        },
        {
          loader: 'url-loader?limit=100000',
          test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/
        },
        {
          test: /\.css$/,
          loader: prefixLoaders
        },
        {
          test: /\.scss$/,
          loader: `${prefixLoaders}!sass`
        }
      ]
    },
    // see http://webpack.github.io/docs/configuration.html#devtool
    devtool: isDevelopment ? 'cheap-module-eval-source-map' : '',
    debug: isDevelopment,
    plugins: (() => {
      const plugins = [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(isDevelopment ? 'development' : 'production'),
            IS_BROWSER: true,
            SERVER_BASE_URL: JSON.stringify(process.env.SERVER_BASE_URL)
          }
        })]

      if (isDevelopment) {
        plugins.push(
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NoErrorsPlugin()
        )
      } else {
        plugins.push(
          new ExtractTextPlugin('main.css'),
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.OccurenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              screw_ie8: true, // eslint-disable-line camelcase
              warnings: false // Because uglify reports irrelevant warnings.
            }
          }),
        )
      }

      return plugins
    })(),
    postcss: [autoprefixer({ browsers: 'last 2 version' })],
  }

  return config
}
