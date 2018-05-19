const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')

module.exports = {
  context: paths.context,
  module: {
    rules: [{
        test: /\.(js|jsx|mjs)$/,
        include: paths.context,
        loader: 'babel-loader?cacheDirectory',
        options: {
          compact: true,
        },
      }, {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([paths.output]),
    new HtmlWebpackPlugin({
      title: 'Hot Module Reload',
    }),
  ],
}