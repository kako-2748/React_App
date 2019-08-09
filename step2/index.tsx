import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {useState}  from 'react'

const AppChild =() => {
  return (
    <div>
      <p>
        <App />
      </p>
    </div>
  )
}
const App =() => {
  const [data, setData] = useState('HELLO WORLD')
  return (
    <App />
  )
}
ReactDOM.render(<AppChild />,document.getElementById('container'))