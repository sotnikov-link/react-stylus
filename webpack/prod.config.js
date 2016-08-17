var path = require('path');

var BASE_DIR = path.resolve(__dirname, '..');

module.exports = {
  context: BASE_DIR,
  entry: [
    './src/index.js'
  ],
  output: {
    path: BASE_DIR + '/dist',
    public_path: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
