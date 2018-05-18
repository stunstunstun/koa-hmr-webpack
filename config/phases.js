const PHASES = Object.freeze({
  development: 'development',
  production: 'production',
})

const isProd = PHASES[process.env.NODE_ENV] === 'production'

module.exports = {
  PHASES,
  isProd,
}