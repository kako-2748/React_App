import * as React from 'react'
import { useState, useEffect,} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


const ListDisplay = (props:any) => {
    const [entry, setEntry]:any = useState(JSON.stringify([{user:{}}]))
    
    const getdata = async () => {
      try {
        axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
        const res = await axios.get('/d/foo?f')
        if(res.status === 200) {
          setEntry(JSON.stringify(res.data))  
        }
      } catch {
        alert('データの取得に失敗しました')
      }
    }
    
    useEffect(() => {
        getdata()
      },[])
    const list = JSON.parse(entry)

    return ( 
      <div>
       {list && list[0].user ? 
        <div>
          <table>
              <caption>一覧画面</caption>
              <tr>
                  <th>項目</th>
                  <th>登録情報</th>
              </tr>
              <tr>
                  <td>名前</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:list[0].user.name}})}>
                  { list[0].user.name === '' ? '登録されていません': list[0].user.name}</a></td>
              </tr>
              <tr>
                  <td>メールアドレス</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:list[0].user.email}})}>
                  {list[0].user.email　=== '' ? '登録されていません': list[0].user.email}</a></td>
              </tr>
              <tr>
                  <td>職業</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:list[0].user.job}})}>
                  {list[0].user.job === '' ? '登録されていません': list[0].user.job}</a></td>
              </tr>
              <tr>
                  <td>住所</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:list[0].user.address}})}>
                  {list[0].user.address === '' ? '登録されていません': list[0].user.address}</a></td>
              </tr>
              <tr>
                  <td>身長</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:list[0].user.height}})}>
                  {list[0].user.height === '' ? '登録されていません': list[0].user.height}</a></td>
              </tr>
              <tr>
                  <td>誕生日</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:list[0].user.birthday}})}>
                  {list[0].user.birthday === '' ? '登録されていません': list[0].user.birthday}</a></td>
              </tr>
              <tr>
                  <td>性別</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:list[0].user.gender}})}>
                  {list[0].user.gender === '' ? '登録されていません': list[0].user.gender}</a></td>
              </tr>
              <tr>
                  <td>チェックボックス</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:list[0].user.check}})}>
                  {list[0].user.check === '' ? '登録されていません': list[0].user.check}</a></td>
              </tr>
              <tr>
                  <td>セレクトボックス</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:list[0].user.select}})}>
                  {list[0].user.select === '' ? '登録されていません': list[0].user.select}</a></td>
              </tr>
              <tr>
                  <td>メモ</td>
                  <td><a onClick={() => props.history.push({pathname: '/ProfEdit', state: {text:list[0].user.memo}})}>
                  {list[0].user.memo === '' ? '登録されていません': list[0].user.memo}</a></td>
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