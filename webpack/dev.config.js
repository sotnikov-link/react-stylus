var webpack = require('webpack');
var path = require('path');
var poststylus = require('poststylus');


var BASE_DIR = path.resolve(__dirname, '..');

module.exports = {
  context: BASE_DIR,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: BASE_DIR + '/dist/bundle',
    public_path: '/',
    filename: '[name].js',
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.styl$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus'
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'file?name=[name]-[hash].[ext]'
      }
    ],
  },
  stylus: {
    use: [
      require('nib')(),
      poststylus(['autoprefixer'])
    ],
    import: ['~nib/lib/nib/index.styl']
  },
  resolve: {
    extensions: ['', '.js', '.styl'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
