import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {useState}  from 'react'
//Appコンポーネント内にボタンを設置する。（タグ）
//ボタンのonClick処理を使用し、#2 で設定したuseStateの値を変更し、変更した内容をAppChild内で表示させる。
const AppChild =(_props) => {
  return (
    <div>
      <p>
        {_props.value}
      </p>
    </div>
  )
}
const App =() => {
  const [data, setData] = useState('hello')
  return (
    <div>
    <AppChild value={data} />
   <button onClick={() => setData(data + 'world')}>ボタン</button>
   </div>
  )
}
ReactDOM.render(<App />,document.getElementById('container'))

