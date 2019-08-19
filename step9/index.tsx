import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {useState}  from 'react'
//テキスト入力コンポーネント（テキストボックスだけのコンポーネント）
//ラジオボタンコンポーネント（ラジオボタンだけのコンポーネント）
//ボタンコンポーネント（ボタンだけのコンポーネント）
//上記3つのコンポーネントを作成し、Appコンポーネント内に「step8と同じフォーム」を作成してください。

const TextComponent = (_props) => {
  return (
  <div>
    <input type="text" placeholder={_props.title} value={_props.value} onChange={_props.onChange}/>
  </div>
  )
}

const RadioComponent = (_props) => {

  return (
    <div>
    <input type="radio"  name="gender" onChange={_props.CheckedMen} /><label>男</label>
      <input type="radio"  name="gender" onChange={_props.CheckedWomen}/><label>女</label>
      </div>
  )
}

const ButtonComponent = (_props) => {  
  return (
    <input type="button" value="登録ボタン"  onClick={_props.getAlert} />
  )
}

const App = () => {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')

  const Alert = () => {
    alert(
      `名前: ${name}
       性別: ${gender}
       年齢: ${age}`
    )}

    const changeName = (e) => {
      setName(e.target.value)
    }
    const changeAge = (e) => {
      setAge(e.target.value)
    }
    const checkedMen = () => {
      setGender('男')
    }
    const checkedWomen = () => {
      setGender('女')
    }
  return (
    <form id="forms">
     <TextComponent
      title="名前"
     value={name} onChange={changeName} />
     <RadioComponent gender={gender}
     CheckedMen={checkedMen} CheckedWomen={checkedWomen}/>
     <TextComponent
      title="年齢"
     value={age} onChange={changeAge} />
     <ButtonComponent getAlert={Alert}/>
   </form>

  )
}
ReactDOM.render(<App />,document.getElementById('container'))

