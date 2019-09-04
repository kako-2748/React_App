import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useState, useContext, createContext, useEffect} from 'react'
import { Route, Switch, HashRouter, Link} from 'react-router-dom'
import axios from 'axios'

/*
一覧から任意のデータを選択し、そのデータの編集画面に遷移する。
編集画面で選択したデータの編集が行えること
編集画面に「更新」ボタンを押下し、データを更新する。成功時に一覧画面に遷移する。一覧には編集後のデータが表示されていること
失敗時にはエラー内容をalertで表示すること
一覧から任意のデータを選択し、「削除」ボタンを押下することでそのデータを削除する。
削除成功時には削除後の一覧が表示されること
*/

//==================
//一覧画面
//==================
const ListDisplay = (props:any) => {
  const [entry, setEntry]:any = useState({user:{}})
  //データ取得関数
  const getdata = async () => {
    try {
      axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
      const res = await axios.get('/d/foo/1?e')
      if(res.status === 200) {
        setEntry(res.data)
      }
    } catch (e) {
      alert('error')
      console.log(e)
    }
  }
  
  useEffect(() => {
    getdata()
  })


  return ( 
    <div>
      <b>一覧画面</b>
     {getdata ? 
      <div>
        <ul>
          <li onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.name}})}>{entry.user.name === '' ? '登録されていません': entry.user.name}</li>
          <li onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.email}})}>{entry.user.email　=== '' ? '登録されていません': entry.user.email}</li>
          <li onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.memo}})}>{entry.user.memo === '' ? '登録されていません': entry.user.memo}</li>
          <li onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.gender}})}>{entry.user.gender === '' ? '登録されていません': entry.user.gender}</li>
          <li onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.birthday}})}>{entry.user.birthday === '' ? '登録されていません': entry.user.birthday}</li>
          <li onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.job}})}>{entry.user.job === '' ? '登録されていません': entry.user.job}</li>
          <li onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.address}})}>{entry.user.address === '' ? '登録されていません': entry.user.address}</li>
          <li onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.height}})}>{entry.user.height === '' ? '登録されていません': entry.user.height}</li>
          <li onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.select}})}>{entry.user.select === '' ? '登録されていません': entry.user.select}</li>
          <li onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.check}})}>{entry.user.check === '' ? '登録されていません': entry.user.check}</li>
        </ul>
      <input type="submit" value="新規登録" onClick={() => props.history.push('/register')} />
      </div>:
      <div>
       <input type="submit" value="新規登録" onClick={() => props.history.push('/register')} />
      </div>
    }
     </div>
  )
}

  

//==================
//登録画面
//==================
const RegisterProf = (_props:any) => {
  const [state, setState] = useState(_props)
   
  //データセット
  const req: VtecxApp.Entry[] = [
      {    
          user:{
              name: state.name,
              email: state.email,
              memo: state.memo,
              gender: state.gender,
              job: state.job,
              birthday: state.birthday,
              address: state.address,
              height:state.height,
              select: state.selectBox,
              check: state.check
          },
          link: [
              {
                  "___href": "/foo/1",
                  "___rel": "self"
              }
          ]
      }
  ]

  //データ登録関数
  const putdata = async () => {
      try {
        axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
        const res = await axios.put('/d/foo',req)
        alert('ok')
        console.log(res)
        console.log(req)
      } catch (e) {
        alert(JSON.stringify(e.response))
        
        console.log(e)
      }
    }

  
return (
    <div>
      <b>登録画面</b>
        <FormContext.Provider value={[state]}>
            <ChangeTextContext.Provider value={[setState, putdata]}>     
                    <FormComponent />
            </ChangeTextContext.Provider>
        </FormContext.Provider>
    </div>
  )
}
//state初期値
RegisterProf.defaultProps = {
  name: '',
  email: '',
  memo: '',
  gender: '',
  birthday: '',
  job: '',
  address: '',
  height: '',
  selectBox: '',
  check: ''
}

//===========================
//登録画面のフォームコンポーネント
//===========================
type form =  any
const FormContext = createContext<form>([])
const ChangeTextContext = createContext<form>([])

const FormComponent = () => {
  const [state] = useContext(FormContext)
  const [setState, putdata] = useContext(ChangeTextContext)
  
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
          <button type="submit"  onClick={putdata}><Link to="/">登録</Link></button>
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

//================
//編集画面
//================
const ProfEdit = () => {
  return (
  <div>
    <b>編集画面</b> <br />
    <input type="text" onChange={(e:any) => {e}}/>
    <button><Link to="/">削除</Link></button>
    <button><Link to="/">更新</Link></button>
  </div>
  )
}

//================
//画面遷移コンポーネント
//================
const App = () => {
  return(

    <HashRouter>
        <Switch>
            <Route exact path = '/' component = { ListDisplay } />
            <Route path = '/register' component = { RegisterProf } />
            <Route path = '/ProfEdit' component = { ProfEdit } />
        </Switch>
    </HashRouter>
  )
}


ReactDOM.render(<App />, document.getElementById('container'))
