const path = require('path')

const root = path.normalize(`${__dirname}/..`)

module.exports = {
  root,
  context: path.join(root, 'src'),
  output: path.join(root, 'dist'),
  pathToStatic: path.join(root, 'dist/static/'),
  htmlTemplate: path.join(root, 'public/index.html'),
}