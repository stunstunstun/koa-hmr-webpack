const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./config/webpack.base.config')
const paths = require('./config/paths')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'babel-polyfill',
    './index',
    'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
  ],
  output: {
    path: paths.output,
    filename: 'static/js/[name].js',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
})