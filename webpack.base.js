module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.styl']
  },
  module: {
    rules: [
      // 解析jsx和js
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      },
      // 解析styl
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'stylus-loader'
          }
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