var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var baseConfig = require('../webpack.base.js');

var url = '/';
// 线上走cdn
if (process.env.NODE_ENV === 'production') {
  url = './';
}
module.exports = merge(baseConfig, {
  entry: './docs/src/index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: url,
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
    port: 9101,
    contentBase: path.join(__dirname, './docs/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './docs/template/index.html',
      inject: true,
      hash: true,
      cache: true
    })
  ]
});