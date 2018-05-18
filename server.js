const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const webpackDevConfig = require('./webpack.dev.config')
const { isProd } = require('./config/phases')

const webpackCompiler = webpack(webpackDevConfig)

const app = express()

// TODO: Configure html template in webpack
// TODO: Migrate to Koa2
if (isProd) {
  app.use('/static/', express.static('dist/static'))
} else {
  app.use(webpackMiddleware(webpackCompiler, {
    noInfo: true,
  }))
  app.use(webpackHotMiddleware(webpackCompiler, {
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }))
}

const port = process.env.PORT || 3000
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port} port`)
})