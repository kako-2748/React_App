import * as React from 'react'
import * as ReactDOM from 'react-dom'

const AppChild = () => {
  return (
    <div>HELLO WORLD</div>
  )
}
const App =() => {
  return (
    <AppChild />
  )
      
}
ReactDOM.render(<App />, document.getElementById('container'))