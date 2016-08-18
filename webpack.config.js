module.exports = {
  entry: ['./src/index.js'],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }]
  },
  resolve: {
    extensions: ['', 'js', 'jsx']
  },
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './public'
  }
}