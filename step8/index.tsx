import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {useState}  from 'react'
import { formatMs } from '@material-ui/core/styles';

/*Appコンポーネントに以下の入力フォームを作成する。

名前（テキスト入力）
性別（ラジオボタン）
年齢（テキスト入力）
登録ボタン
登録ボタンを押すと、上記入力した内容を以下のようにalertで表示させる。

以下の内容を登録します。
　名前：{入力した名前}
　性別：{選択した性別}
　年齢：{入力した年齢}
入力した内容はすべてuseStateで管理すること。 */

const App = () => {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  
  const Alert = () => {
    alert(
      `名前: ${name}
       性別: ${gender}
       年齢: ${age}`
    )
  }
  return (
    <form id="forms">
      <input type="text" value={name} placeholder="名前" onChange={e => setName(e.target.value)} />
      <input type="radio"  name="gender" checked={gender === '男'} onChange={() => setGender('男')} /><label>男</label>
      <input type="radio"  name="gender" checked={gender === "女"} onChange={() => setGender('女')}/><label>女</label>
      <input type="text" value={age} placeholder="年齢" onChange={e => setAge(e.target.value)} />
      <input type="button" value="登録ボタン"  onClick={Alert} />
    </form>
  )
}
ReactDOM.render(<App />,document.getElementById('container'))
