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
        if(res.status === 200) {
          const list = JSON.stringify(res.data)
          setEntry(() => JSON.parse(list || 'null'))
        }
      } catch {
        alert('データの取得に失敗しました')
      }
    }
    useEffect(() => {
        getdata()
        
      },[])
   console.log(entry)
        return ( 
       
        <div>
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
              { entry.length > 0 ? 
                entry.map((value:any, index:number ) => (
              <tr>   
                  
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.name,data: value}})}>
                     {value.user.name}</a></td>
                 
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                    state: {text:value.user.email},data: value})}>
                    {value.user.email}</a></td>
                  
                    <td  key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.job},data: value})}>
                     {value.user.job}</a></td>
               
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.address},data: value})}>
                     {value.user.address}</a></td>
                  
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.height},data: value})}>
                     {value.user.height}</a></td>
                  
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.birthday},data: value})}>
                     {value.user.birthday}</a></td>
                   
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.gender},data: value})}>
                     {value.user.gender}</a></td>
                  
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.check},data: value})}>
                     {value.user.check}</a></td>
               
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.select},data: value})}>
                     {value.user.select}</a></td>
                   
                    <td key={index}><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.memo},data: value})}>
                     {value.user.memo}</a></td>
              </tr>
                ))
              :

          <p>登録されていません</p>
           }
          </table>
          <button onClick={() => props.history.push('/register')}>新規登録</button>
                  
             
         </div>     
    )
  }

  export default withRouter(ListDisplay)