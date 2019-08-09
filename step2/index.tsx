import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {useState}  from 'react'



const App =() => {
  const [data, setData] = useState('HELLO WORLD')
  return (
    <>
      <p>{data}</p>
    </>
  )

}
  
ReactDOM.render(<App />, document.getElementById('container'))