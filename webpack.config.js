const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const {CleanPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    }),
    new CleanPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}