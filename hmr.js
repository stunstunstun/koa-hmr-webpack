const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const { PassThrough } = require('stream')

exports.koaDevMiddleware = (webpackCompiler, options) => {
  const expressStyled = webpackDevMiddleware(webpackCompiler, options)
  const koaStyled = async (ctx, next) => {
    await expressStyled(ctx.req, {
      end: (content) => {
        ctx.body = content
      },
      setHeader: (name, value) => {
        ctx.set(name, value)
      },
      locals: ctx.state,
    }, next)
  }
  koaStyled.close = expressStyled.close
  koaStyled.invalidate = expressStyled.invalidate
  koaStyled.waitUntilInvalid = expressStyled.waitUntilInvalid
  return koaStyled
}

exports.koaHotMiddleware = (webpackCompiler, options) => {
  const expressStyled = webpackHotMiddleware(webpackCompiler, options);
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