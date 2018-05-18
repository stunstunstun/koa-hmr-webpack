import logoImage from './media/webpack.svg'
import './styles/main.scss'

document.body.appendChild((() => {
  const element = document.createElement('div')
  element.innerHTML = 'Hello World!'
  const logo = new Image()
  logo.src = logoImage
  element.appendChild(logo)
  return element
})())