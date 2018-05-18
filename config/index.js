const webpackDevConfig = require('../webpack.dev.config')
const webpackProdConfig = require('../webpack.config')
const { isProd } = require('./phases')

const webpackConfig = isProd ? webpackProdConfig : webpackDevConfig

module.exports = webpackConfig