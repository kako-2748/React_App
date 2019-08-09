import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {useState}  from 'react'

//Appコンポーネントに以下の関数を作成する。
//useStateに「ボタンが押されました」と設定する。
//AppChildコンポーネントに上記関数をpropsを用いて継承する。
//AppChildコンポーネントにボタンを設置し、継承された上記関数をonClick処理で実行し、App内で「ボタンが押されました」と表示させる。
const AppChild =(_props) => {
  return (
    <div>
      <button onClick={_props.text}>ボタン</button>
    </div>
  )
}

const App =() => {
  const [data, setData] = useState('')
  const changeText = () => {
    setData(data + 'ボタンが押されました。')
  }

  return (
    <div>
      <p>{data}</p>
      <AppChild text={changeText} />
    </div>
  )
}
ReactDOM.render(<App />,document.getElementById('container'))


