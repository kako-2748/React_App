import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {useState}  from 'react'
const App =() => {
  
  const initialstate = {
    text: 'HELLO WORLD'
  }
  const [data, setData] = useState(initialstate.text)
  return (
    <>
      <p>{data}</p>
      <p>{() => setData(initialstate.text)}</p>
    </>
  )
      
}
ReactDOM.render(<App />, document.getElementById('container'))