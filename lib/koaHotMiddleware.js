const webpackHotMiddleware = require("webpack-hot-middleware")
const { PassThrough } = require('stream')

module.exports = (compiler, opts) => {
  const expressStyled = webpackHotMiddleware(compiler, opts);
  return async (ctx, next) => {
    const stream = new PassThrough()
    await expressStyled(ctx.req, {
      write: stream.write.bind(stream),
      writeHead: (status, headers) => {
        ctx.body = stream
        ctx.status = status
        ctx.set(headers)
      },
    }, next)
  }
}