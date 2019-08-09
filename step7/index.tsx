import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {useState}  from 'react'

//AppChildコンポーネント内でinputタグを設置する。
//onChange処理で入力した値をuseStateに設定する。
//入力した値をAppChildコンポーネント内で表示する。
const AppChild =(_props) => {
  return (
    <div>
      <input onChange={_props.text}/>
    </div>
  )
}

const App =() => {
  const [data, setData] = useState('')
  const changeText = (event) => {
    setData(event.target.value )
  }

  return (
    <div>
      <p>{data}</p>
      <AppChild text={changeText} />
    </div>
  )
}
ReactDOM.render(<App />,document.getElementById('container'))


