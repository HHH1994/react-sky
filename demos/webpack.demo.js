var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var baseConfig = require('../webpack.base.js');

module.exports = merge(baseConfig, {
  entry: './demos/src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: 'chunks/[name][hash].js'
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../')
    }
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: path.join(__dirname, './demos/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demos/template/index.html',
      inject: true,
      hash: true,
      cache: true
    })
  ]
});