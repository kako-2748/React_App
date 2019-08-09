import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {useState}  from 'react'



const App =() => {
  const [data, setData] = useState('HELLO WORLD')
  return (
    <div>
      <p>{data}</p>
    </div>
  )

}
  
ReactDOM.render(<App />, document.getElementById('container'))