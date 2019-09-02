import * as React from 'react'
import * as ReactDOM from 'react-dom'
//import { useState, useContext, createContext} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
//import axios from 'axios'

/*
10項目の項目（スキーマ）を用意し、画面で入力したデータを登録、編集、削除するアプリを作成する。
項目名は和名と英名を用意し、和名を画面描画に使用し、英名をスキーマ名に使用すること
一覧画面（index.html）を開くと登録したデータをテーブルで一覧表示する。
データが登録されていない場合は「登録されていない」旨を表示する。
index.htmlに「新規登録」ボタンを設置し、登録画面に遷移する。
登録画面で10項目を入力するフォームを用意する。
テキストエリア、ラジオボタン、セレクトボックス、チェックボックスを必ず使用すること
登録画面で「登録」ボタンを押下し、データを登録する。成功時には一覧画面に遷移する。一覧には登録した全データが表示されていること
登録に失敗した場合は、エラー内容をalertで表示すること
一覧から任意のデータを選択し、そのデータの編集画面に遷移する。
編集画面で選択したデータの編集が行えること
編集画面に「更新」ボタンを押下し、データを更新する。成功時に一覧画面に遷移する。一覧には編集後のデータが表示されていること
失敗時にはエラー内容をalertで表示すること
一覧から任意のデータを選択し、「削除」ボタンを押下することでそのデータを削除する。
削除成功時には削除後の一覧が表示されること
*/

/*type form =  any
const FormContext = createContext<form>([])
const ChangeTextContext = createContext<form>([])

const FormComponent = () => {
    const [state] = useContext(FormContext)
    const [setState] = useContext(ChangeTextContext)
    
    return (
        <form name="forms">    
            <input type="text" name={state.name} value={state.name} onChange={(e:any) => setState({...state,name: e.target.value})} placeholder="名前"　/><br />
            <input type="text" name={state.email} value={state.email} onChange={(e:any) => setState({...state, email:e.target.value})} placeholder="メールアドレス" /><br />
            <label htmlFor="calendar">生年月日:</label><br />
            <input type="date" max="9999-12-31" value={state.birthday} onChange={(e:any) => setState({...state, birthday:e.target.value})} /><br />
            <input type="text" value={state.job} onChange={(e:any) => setState({...state, job: e.target.value})} placeholder="職業" /><br />
            <input type="text" name={state.address} value={state.address} onChange={(e:any) => setState({...state, address: e.target.value})} placeholder="住所" /><br />
            <input type="text" name={state.height} value={state.height} onChange={(e:any) => setState({...state, height: e.target.value})} placeholder="身長"/><br />
            <CheckComponent />   
            <textarea name={state.memo} value={state.memo} onChange={(e:any) => setState({...state, memo: e.target.value})} placeholder="メモ"></textarea><br /> 
            <ButtonCompoent />
        </form>
    )
}

const CheckComponent = () => {
    const [state] = useContext(FormContext)
    const [setState] = useContext(ChangeTextContext)
  
    return (
    <form>
         <input type="radio" name={state.gender} onChange={() => setState({...state,gender: '男'})} /><label htmlFor="gender">男</label>
         <input type="radio" name={state.gender} onChange={() => setState({...state, gender: '女'})} /><label htmlFor="gender">女</label><br />
          <input type="checkbox" name={state.check} onChange={() => setState({...state, check: 'チェック１'})} />チェック１
          <input type="checkbox" name={state.check} onChange={() => setState({...state, check: 'チェック２'})} />チェック2
          <input type="checkbox" name={state.check} onChange={() => setState({...state, check:'チェック３'})} />チェック3<br />
         <select value={state.selectBox} onChange={(e:any) => setState({...state, selectBox: e.target.value})}>
          <option value="サンプル１">サンプル１</option>
          <option value="サンプル２">サンプル２</option>
          <option value="サンプル３">サンプル３</option>
        </select><br />
    </form>
    )
}

const ButtonCompoent = () => {
    const [putdata] = useContext(ChangeTextContext)
    return(
    <button type="submit"  onClick={putdata}>登録</button>
    )
}
*/
const ListDisplay = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)
const RegistProf = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
)
const ProfEdit = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
)

const App = (/*props:any*/) => {
  return(
    <BrowserRouter>
        <div>
            <Route exact path = '/' component = { ListDisplay } />
            <Route path = '/regist' component = { RegistProf } />
            <Route path = '/ProfEdit' component = { ProfEdit } />
        </div>
    </BrowserRouter>
  )
}
  /*  const [state, setState] = useState(props)
   
    const req: VtecxApp.Entry[] = [
        {    
            user:{
                name: state.name,
                email: state.email,
                memo: state.memo,
                gender: state.gender,
                job: state.job,
                address: state.address,
                height:state.height,
                select: state.selectBox,
                check: state.check
            },
            link: [
                {
                    "___href": "/foo/2",
                    "___rel": "self"
                }
            ]
        }
    ]
  
    const putdata = async () => {
        try {
          axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
          const res = await axios.put('/d/foo',req)
          console.log(res)
          console.log(req)
        } catch (e) {
          alert('登録に失敗しました。')
          console.log(e)
        }
      }

    
  return (
      <div>
          <FormContext.Provider value={[state]}>
              <ChangeTextContext.Provider value={[setState, putdata]}>     
                      <FormComponent />
              </ChangeTextContext.Provider>
          </FormContext.Provider>
      </div>
  )
}
App.defaultProps = {
    name: '',
    email: '',
    memo: '',
    gender: '',
    birthday: '',
    job: '',
    address: '',
    height: '',
    selectBox: '',
    check: ['']
}

*/

ReactDOM.render(<App />, document.getElementById('container'))