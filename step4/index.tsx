import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {useState}  from 'react'

const AppChild =(_props) => {
  return (
    <div>
      <p>
        {_props.value}
      </p>
    </div>
  )
}
const App = () => {
const [data, setData] = useState('HELLO WORLD')
return (
    <AppChild value={data} />
  )
}
ReactDOM.render(<App />,document.getElementById('container'))