var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('../webpack.base.js');

module.exports = merge(baseConfig, {
  entry: [
    './components/src/button/index.tsx'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js'
  }
});