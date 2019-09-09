import * as React from 'react'
import { useState, useEffect,} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

//listのif文の判定修正
//テーブルの配列を全部表示
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
    console.log(list)
   
        return ( 
       
        <div>
           { list !== null ?
           <div>
          <table>
              <caption>一覧画面</caption>
              <tr>
                  <th>項目</th>
                  <th>登録情報</th>
              </tr>
              <tr>
                  <td>名前</td>
                  { 
                  list.map((event:any, index:number ) => ( 
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:event.user.name},data: event.user,index,  title: index + 'name'})}>
                     { event.user.name === '' ? '登録されていません': event.user.name}</a></td>
                   ))}
              </tr>
              <tr>
                  <td>メールアドレス</td>
                  { 
                  list.map((event:any, index: number) => (
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                    state: {text:event.user.email},data: event.user,index,  title: index + 'email'})}>
                    {event.user.email　=== null ? '登録されていません': event.user.email}</a></td>
                   ))}
              </tr>
              <tr>
                <td>職業</td>
              { 
                  list.map((event:any, index:number) => ( 
                    <td  key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:event.user.job},data: event.user,  title: event.user.job})}>
                     { event.user.job === '' ? '登録されていません': event.user.job}</a></td>
                   ))}
              </tr>
              <tr>
                  <td>住所</td>
                  { 
                  list.map((event:any, index:number) => ( 
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:event.user.address},data: event.user,index,  title: index + 'address'})}>
                     { event.user.address === '' ? '登録されていません': event.user.address}</a></td>
                   ))}
              </tr>
              <tr>
                  <td>身長</td>
                  { 
                  list.map((event:any, index:number) => ( 
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:event.user.height},data: event.user,index,  title: index + 'height'})}>
                     { event.user.height === '' ? '登録されていません': event.user.height}</a></td>
                   ))}
              </tr>
              <tr>
                  <td>誕生日</td>
                  { 
                  list.map((event:any, index:number) => ( 
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:event.user.birthday},data: event.user,index,  title: index + 'birthday'})}>
                     { event.user.birthday === '' ? '登録されていません': event.user.birthday}</a></td>
                   ))}
              </tr>
              <tr>
                  <td>性別</td>
                  { 
                  list.map((event:any, index:number) => ( 
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:event.user.gender},data: event.user,index,  title: index + 'gender'})}>
                     { event.user.gender === '' ? '登録されていません': event.user.gender}</a></td>
                   ))}
              </tr>
              <tr>
                  <td>チェックボックス</td>
                  { 
                  list.map((event:any, index:number) => ( 
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:event.user.check},data: event.user,index,  title: index + 'check'})}>
                     { event.user.check === '' ? '登録されていません': event.user.check}</a></td>
                   ))}
              </tr>
              <tr>
                  <td>セレクトボックス</td>
                  { 
                  list.map((event:any, index:number) => ( 
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:event.user.select},data: event.user,index,  title: index + 'select'})}>
                     { event.user.select === '' ? '登録されていません': event.user.select}</a></td>
                   ))}
              </tr>
              <tr>
                  <td>メモ</td>
                  { 
                  list.map((event:any, index:number) => ( 
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:event.user.memo},data: event.user,index,  title: index + 'memo'})}>
                     { event.user.memo === '' ? '登録されていません': event.user.memo}</a></td>
                   ))}
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