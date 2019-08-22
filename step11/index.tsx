import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {useState, useReducer}  from 'react'

/*index.tsxにインジケーター本体を設置する。
インジケーターは変数「show」がtrueの時のみ表示させること
フォームコンポーネントを作成し、「氏名」「性別」「年齢」フォームを設置する。
フォームコンポーネントに「登録ボタン」を設置する。
登録ボタン押下時にuseReducerでインジケーターの変数「show」をtrueにする。
dispatchを使用して変数を変更すること
登録ボタン押下後「5秒後」にインジケーターを非表示にする。*/
const FormComponent = (_props:any) => {
  return (
    <div>
    <input type="text" value={_props.name} placeholder="氏名" onChange={_props.changeName}/>
    <input type="radio" name={_props.gender} value="男" onChange={_props.checkedMen} /><label htmlFor="gender">男</label>
    <input type="radio" name={_props.gender} value="女" onChange={_props.checkedWomen} /><label htmlFor="gender">女</label>
    <input type="text" value={_props.age} placeholder="年齢" onChange={_props.changeAge}/>
    <button onClick={_props.clickButton}>登録</button>
    </div>
  )
}
const initState = {show: false}
const reducer = (state:any,action:any) => {
  switch(action.type) {
    case 'showImg':
    return {show: true}
    case 'hiddenImg':
      return {show: false}
      default:
        return state
  }
}

const App = () => {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  
  const changeName = (e:any) => {
    setName(e.value)
  }
  const changeAge = (e:any) => {
    setAge(e.target.value)
  }
  const checkedMen = () => {
    setGender('男')
  }
  const checkedWomen = () => {
    setGender('女')
  }

  const [state, dispatch] = useReducer(reducer,
    initState)
    let img:any = document.getElementById('image')

  const showIndicator = () => {
    dispatch({type: 'showImg'})
    
    console.log({state})
    if({show: true}){
      img.style.display = "block"
      setTimeout(() => {
        img.style.display = "none"
      }, 5000);
      console.log('block')
    }else{
      img.style.display ="none"
      console.log('none')
    }
  }

  return (
    <div>
      <FormComponent 
      valueName={name} changeName={changeName}
      valueAge={age} changeAge={changeAge} 
      valueGender={gender} checkedMen={checkedMen}
      checkedWomen={checkedWomen} clickButton={showIndicator}/>
      <div　id="image" style={{display:'none'}}>
      <img src="../img/ajax-loader.gif" />
      </div>
    </div>
  )
}
ReactDOM.render(<App />,document.getElementById('container'))

