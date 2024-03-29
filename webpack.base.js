var path = require('path');
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.styl', '.ts', '.tsx'],
    alias: {
      '@': path.join(__dirname, './')
    }
  },

  devtool: 'source-map',

  module: {
    rules: [

      // 解析ts
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      },

      // 解析jsx和js
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      // 解析styl
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      // 解析图片
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1500,
              name: 'imgs/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
}