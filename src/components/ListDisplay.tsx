import * as React from 'react'
import { useState, useEffect,} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


const ListDisplay = (props:any) => {
    const [entry, setEntry]:any = useState({user:{}})
    
    const getdata = async () => {
      try {
        axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
        const res = await axios.get('/d/foo/1?e')
        if(res.status === 200) {
          setEntry(res.data)
        }
      } catch  {
        alert('データの取得に失敗しました')
      }
    }
    
    useEffect(() => {
        getdata()
      },[])
    
    return ( 
      <div>
       {entry ? 
        <div>
          <table>
              <caption>一覧画面</caption>
              <tr>
                  <th>項目</th>
                  <th>登録情報</th>
              </tr>
              <tr>
                  <td>名前</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.name}})}>
                  { entry.user.name === '' ? '登録されていません': entry.user.name}</a></td>
              </tr>
              <tr>
                  <td>メールアドレス</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.email}})}>
                  {entry.user.email　=== '' ? '登録されていません': entry.user.email}</a></td>
              </tr>
              <tr>
                  <td>職業</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.job}})}>
                  {entry.user.job === '' ? '登録されていません': entry.user.job}</a></td>
              </tr>
              <tr>
                  <td>住所</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.address}})}>
                  {entry.user.address === '' ? '登録されていません': entry.user.address}</a></td>
              </tr>
              <tr>
                  <td>身長</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.height}})}>
                  {entry.user.height === '' ? '登録されていません': entry.user.height}</a></td>
              </tr>
              <tr>
                  <td>誕生日</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.birthday}})}>
                  {entry.user.birthday === '' ? '登録されていません': entry.user.birthday}</a></td>
              </tr>
              <tr>
                  <td>性別</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.gender}})}>
                  {entry.user.gender === '' ? '登録されていません': entry.user.gender}</a></td>
              </tr>
              <tr>
                  <td>チェックボックス</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.check}})}>
                  {entry.user.check === '' ? '登録されていません': entry.user.check}</a></td>
              </tr>
              <tr>
                  <td>セレクトボックス</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.select}})}>
                  {entry.user.select === '' ? '登録されていません': entry.user.select}</a></td>
              </tr>
              <tr>
                  <td>メモ</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:entry.user.memo}})}>
                  {entry.user.memo === '' ? '登録されていません': entry.user.memo}</a></td>
              </tr>
          </table>
        <button onClick={() => props.history.push('/register')}>新規登録</button>
        </div>
        :
        <div>
        <button onClick={() => props.history.push('/register')}>新規登録</button>
        </div>
      }
       </div>
    )
  }

  export default withRouter(ListDisplay)