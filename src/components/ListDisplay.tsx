import * as React from 'react'
import { useState, useEffect,} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const ListDisplay = (props:any) => {
    const [entry, setEntry]:any = useState([])
    
    const getdata = async () => {
      try {
        axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
        const res = await axios.get('/d/foo?f')
        console.log(res)
        if(res.status === 200) {
          setEntry(res.data)
        }
      } catch {
        alert('データの取得に失敗しました')
      }
    }
    useEffect(() => {
        getdata()
        
      },[])
        return ( 
       
        <div>
          { entry.length > 0 ? 
          <table>
              <tr>
                  <th>名前</th>
                  <th>メール</th>
                  <th>職業</th>
                  <th>住所</th>
                  <th>身長</th>
                  <th>誕生日</th>
                  <th>性別</th>
                  <th>チェック</th>
                  <th>セレクト</th>
                  <th>メモ</th>
              </tr>
            
                {entry.map((value:any) => (
              <tr>   
                  
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.name,data: value, title: 'name'}})}>
                     {value.user.name}</a></td>
                 
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                    state: {text:value.user.email},data: value, title: 'email'})}>
                    {value.user.email}</a></td>
                  
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.job},data: value, title:'job'})}>
                     {value.user.job}</a></td>
               
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.address},data: value, title: 'address'})}>
                     {value.user.address}</a></td>
                  
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.height},data: value, title: 'height'})}>
                     {value.user.height}</a></td>
                  
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.birthday},data: value, title: 'birthday'})}>
                     {value.user.birthday}</a></td>
                   
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.gender},data: value, title: 'gender'})}>
                     {value.user.gender}</a></td>
                  
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.check},data: value, title: 'check'})}>
                     {value.user.check}</a></td>
               
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.select},data: value, title: 'select'})}>
                     {value.user.select}</a></td>
                   
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.memo},data: value, title: 'memo'})}>
                     {value.user.memo}</a></td>
              </tr>
                ))}
          </table>
          :
           <p>登録されていません</p>
          }
          <button onClick={() => props.history.push('/register')}>新規登録</button>
                  
             
         </div>     
    )
  }

  export default withRouter(ListDisplay)