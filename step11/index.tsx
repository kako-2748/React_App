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
  const [changeName, changeAge,] = useContext(ChangeFormContext)
  const [checkedMen, checkedWomen, showIndicator] = useContext(CheckedFormText)
  
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

type form = string[]
const FormContext = createContext<form>([])
const ChangeFormContext = createContext([(e:any) => {e.target.value}])
const CheckedFormText = createContext([() => { }])

const initState = {show: false}
const Reducer = (state:any,action:any) => {
  switch(action.type) {
    case 'showImg':
    return {...state, show: true}
    case 'hiddenImg':
      return {...state, show: false}
      default:
        return state
  }
}

const App = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [state, dispatch] = useReducer(Reducer,
    initState)  

  const showIndicator = () => {
    dispatch({type: 'showImg'})
    
    setTimeout(() => {
      dispatch({type: 'hiddenImg'})
    }, 5000)
  }

  const changeName = (e:any) => {
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
console.log(state)
  return (
    <FormContext.Provider value={[name,age,gender]}>
      <ChangeFormContext.Provider value={[changeName, changeAge]}>
        <CheckedFormText.Provider value={[checkedMen, checkedWomen, showIndicator]}>
        <FormComponent />
        {state.show &&
          <div>
            <img src="./img/ajax-loader.gif" />
          </div>
        }
        </CheckedFormText.Provider>
       </ChangeFormContext.Provider>
     </FormContext.Provider>
  )
}

ReactDOM.render(<App />,document.getElementById('container'))