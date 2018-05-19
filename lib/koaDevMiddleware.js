const webpackDevMiddleware = require("webpack-dev-middleware")

module.exports = (webpackCompiler, options) => {
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