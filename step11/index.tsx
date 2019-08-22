import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {useState, useReducer ,useContext, createContext}  from 'react'

/*index.tsxにインジケーター本体を設置する。
インジケーターは変数「show」がtrueの時のみ表示させること
フォームコンポーネントを作成し、「氏名」「性別」「年齢」フォームを設置する。
フォームコンポーネントに「登録ボタン」を設置する。
登録ボタン押下時にuseReducerでインジケーターの変数「show」をtrueにする。
dispatchを使用して変数を変更すること
登録ボタン押下後「5秒後」にインジケーターを非表示にする。*/

const FormComponent = () => {
  const [name, age,gender] = useContext(FormContext)
  const [changeName, changeAge, checkedMen, checkedWomen, showIndicator] = useContext(ChangeFormContext)
  
  return (
    <div>
    <input type="text" value={name} placeholder="氏名" onChange={changeName} />
    <input type="radio" name={gender} value="男" onChange={checkedMen} /><label htmlFor="gender">男</label>
    <input type="radio" name={gender} value="女" onChange={checkedWomen} /><label htmlFor="gender">女</label>
    <input type="text" value={age} placeholder="年齢" onChange={changeAge} />
    <button onClick={showIndicator}>登録</button>
    </div>
  )
}

const initState = {show: false}
const Reducer = (state:any,action:any) => {
  switch(action.type) {
    case 'showImg':
    return {show: true}
    case 'hiddenImg':
      return {show: false}
      default:
        return state
  }
}

const FormContext = createContext([])
const ChangeFormContext = createContext([() => {}])
const App = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [state, dispatch] = useReducer(Reducer,
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
  const changeName = (e: any) => {
    setName(e.target.value)
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


  return (
    <FormContext.Provider value={[name, age, gender]}>
      <ChangeFormContext.Provider value={[changeName, changeAge, checkedMen, checkedWomen, showIndicator]}>
        <FormComponent />
        <div　id="image" style={{display:'none'}}>
         <img src="../img/ajax-loader.gif" />
        </div>
       </ChangeFormContext.Provider>
     </FormContext.Provider>
  )
}
ReactDOM.render(<App />,document.getElementById('container'))


