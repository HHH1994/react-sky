var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var baseConfig = require('../webpack.base.js');

module.exports = merge(baseConfig, {
  entry: './examples/src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: 'chunks/[name][hash].js'
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: path.join(__dirname, './examples/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/template/index.html',
      inject: true,
      hash: true,
      cache: true
    })
  ]
});