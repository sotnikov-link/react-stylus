var webpack = require('webpack');
var path = require('path');

var BASE_DIR = path.resolve(__dirname, '..');

module.exports = {
  context: BASE_DIR,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: BASE_DIR + '/dist',
    public_path: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader'
    }],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
