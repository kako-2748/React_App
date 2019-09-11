import * as React from 'react'
import { useState, useEffect,} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const ListDisplay = (props:any) => {
    const [entry, setEntry]:any = useState([])
    console.log('props',props)
    const getdata = async () => {
      try {
        axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
        const res = await axios.get('/d/foo?f')
          setEntry(res.data)
      } catch {
        alert('データの取得に失敗しました')
      }
    }
    useEffect(() => {
        getdata()
        
      },[])

      const deletedata = async (index:number) => {
        try {
          axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
          console.log(entry)
          const getId = entry[index].link[0].___href
          const res = await axios.delete('/d'+ getId)
          console.log('res', res)
          getdata()
          
          alert('削除しました')
        } catch (e) {
          alert('削除できませんでした')
        }
      }
     
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
            
                {entry.map((value:any, index:number) => (
              <tr>   
                  
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.name}, data: value, title: 'name', type: 'text'})}>
                     {value.user.name}</a></td>
                 
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                    state: {text:value.user.email},data: value, title: 'email', type: 'text'})}>
                    {value.user.email}</a></td>
                  
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.job},data: value, title:'job', type: 'text'})}>
                     {value.user.job}</a></td>
               
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.address},data: value, title: 'address', type: 'text'})}>
                     {value.user.address}</a></td>
                  
                    <td><a onClick={() => props.history.push({pathname: '/ProfEdit',
                     state: {text:value.user.height},data: value, title: 'height', type: 'text'})}>
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
                     <td><button onClick={() => deletedata(index)}>削除</button></td>
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