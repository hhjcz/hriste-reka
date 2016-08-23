import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'
import constants from './constants'

/**
 * @param {Object} options
 * @returns {Object} config
 */
export default function makeWebpackConfig(options = { isDevelopment: false, useCssModules: true }) {

  const { isDevelopment, useCssModules } = options
  console.info(`Webpacking... (NODE_ENV=${process.env.NODE_ENV}, isDevelopment=${isDevelopment})`)

  // babel
  const babelPresets = isDevelopment
    ? [path.join(constants.NODE_MODULES_DIR, 'babel-preset-react-hmre')]
    : []
  const babelPlugins = ['add-module-exports']
  if (!isDevelopment) babelPlugins.push(/* 'transform-react-constant-elements', */)

  // stylesheets
  const suffixLoaders = {
    css: '',
    scss: '!sass',
    sass: '!sass?indentedSyntax',
  }
  const styleLoaders = Object.keys(suffixLoaders).map(suffix => {
    const cssModules = useCssModules ? '?modules' : ''
    const suffixLoader = `css-loader${cssModules}!postcss-loader${suffixLoaders[suffix]}`
    const loader = isDevelopment
      ? `style-loader!${suffixLoader}`
      : ExtractTextPlugin.extract('style-loader', suffixLoader)
    return {
      test: new RegExp(`\\.${suffix}$`),
      loader
    }
  })

  const config = {
    entry: {
      app: isDevelopment ? [
        'webpack-hot-middleware/client',
        './src/index.js'
      ] : [
        './src/index.js'
      ],
      hriste: ['./src/hriste.js']
    },
    resolve: {
      root: [constants.BASE_DIR],
      extensions: ['', '.js', '.jsx'],
      modulesDirectories: ['node_modules', 'src'],
      alias: {
        // example aliasing local library (in development), hhj:
        '@hhjcz/react-lib/lib': path.resolve('..', 'react-lib/lib'),
      },
    },
    resolveLoader: { // required when using modules outside of root dir:
      root: [constants.NODE_MODULES_DIR],
      fallback: [constants.NODE_MODULES_DIR],
      modulesDirectories: ['node_modules'],
    },
    output: {
      path: constants.BUILD_DIR,
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
          test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        },
        ...styleLoaders
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
          new ExtractTextPlugin('[name].css', {
            allChunks: true,
          }),
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
