require('./styles/main.scss')

document.body.appendChild((() => {
  const element = document.createElement('div')
  element.innerHTML = 'Hello World!'
  const logo = new Image()
  logo.src = require('./media/webpack.svg')
  element.appendChild(logo)
  return element
})())