import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Home</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
