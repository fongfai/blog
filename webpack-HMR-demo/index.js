import hello from './hello.js'
import hello2 from './hello2.js'

const div = document.createElement('div')
div.innerHTML = hello()
document.body.appendChild(div)


window.addEventListener('load', () => console.log('load=='))

// index.js
if(module.hot) {
  console.log('index.js', module.hot)
  module.hot.accept('./hello.js', function() {
      div.innerHTML = hello()
  })
}