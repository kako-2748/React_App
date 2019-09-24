import * as React from 'react'
import { useState, useEffect,} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const ListProf = (props:any) => {
    const [feed, setfeed] = useState<VtecxApp.Entry[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [feedLength, setFeedLength] = useState(0)

  　const deleteEntry = async (entry:VtecxApp.Entry) => {
        try {
          axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
          if(entry && entry.link) {
             const key = entry.link[0].___href 
             const res = await axios.delete('/d'+ key)
             console.log(res)
             pagination()
          }
          alert('削除しました')

        } catch (e) {
          alert('削除できませんでした')
        }
      }
    
      const pagination = async() => {
        try {
          const maxPage = Math.ceil(feedLength / 5)
          console.log('maxPage',maxPage)

          axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
          const getFeedLength = await axios.get('/d/foo?f&c&l=*')
          setFeedLength(getFeedLength.data.feed.title)
          await axios.get('/d/foo?f&_pagination=4')
          const res = await axios.get('/d/foo?f&n='+ currentPage + '&l=5')
          setfeed(res.data)

        } catch {

          alert('データがありません')
        }
      }

      useEffect(() => {
        pagination()
          
        },[currentPage])
        
        return ( 
       
        <div>
          { feed.length > 0 ? 
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
            
                {feed.map((entry) => (
              <tr>   
                  
                    <td><a onClick={() => props.history.push({pathname: '/EditProf',
                     state: {text:entry.user!.name}, data: entry, title: 'name', type: 'text'})}>
                     {entry.user!.name}</a></td>
                 
                    <td><a onClick={() => props.history.push({pathname: '/EditProf',
                    state: {text:entry.user!.email},data: entry, title: 'email', type: 'text'})}>
                    {entry.user!.email}</a></td>
                  
                    <td><a onClick={() => props.history.push({pathname: '/EditProf',
                     state: {text:entry.user!.job},data: entry, title:'job', type: 'text'})}>
                     {entry.user!.job}</a></td>
               
                    <td><a onClick={() => props.history.push({pathname: '/EditProf',
                     state: {text:entry.user!.address},data: entry, title: 'address', type: 'text'})}>
                     {entry.user!.address}</a></td>
                  
                    <td><a onClick={() => props.history.push({pathname: '/EditProf',
                     state: {text:entry.user!.height},data: entry, title: 'height', type: 'text'})}>
                     {entry.user!.height}</a></td>
                  
                    <td><a onClick={() => props.history.push({pathname: '/EditProf',
                     state: {text:entry.user!.birthday},data: entry, title: 'birthday'})}>
                     {entry.user!.birthday}</a></td>
                   
                    <td><a onClick={() => props.history.push({pathname: '/EditProf',
                     state: {text:entry.user!.gender},data: entry, title: 'gender'})}>
                     {entry.user!.gender}</a></td>
                  
                    <td><a onClick={() => props.history.push({pathname: '/EditProf',
                     state: {text:entry.user!.check},data: entry, title: 'check'})}>
                     {entry.user!.check}</a></td>
               
                    <td><a onClick={() => props.history.push({pathname: '/EditProf',
                     state: {text:entry.user!.select},data: entry, title: 'select'})}>
                     {entry.user!.select}</a></td>
                   
                    <td><a onClick={() => props.history.push({pathname: '/EditProf',
                     state: {text:entry.user!.memo},data: entry, title: 'memo'})}>
                     {entry.user!.memo}</a></td>
                     <td><button onClick={() => deleteEntry(entry)}>削除</button></td>
              </tr>
                ))} 
          </table>
          <b>総件数:{feedLength}</b><br />
          <b>現在のページ:{currentPage}</b>
          <ul>
            <li><a href="javascript:void(0)"
            onClick={() => currentPage === 1 ? null: setCurrentPage(1)}>最初</a></li>
            <li><a href="javascript:void(0)"
            onClick={() => currentPage === 1 ? null: setCurrentPage(currentPage - 1)}>前へ</a></li>
            <li><a href="javascript:void(0)" 
            onClick={() => currentPage === 4 ? null: setCurrentPage(currentPage + 1)} >次へ</a></li>
            <li><a href="javascript:void(0)"
            onClick={() => currentPage === 4 ? null: setCurrentPage(maxPage)}>最後</a></li>
          </ul>

          </div>
          :
           <p>登録されていません</p>
          }
          <button onClick={() => props.history.push('/RegisterProf')}>新規登録</button>
             
         </div>     
    )
  }

  export default withRouter(ListProf)