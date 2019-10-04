import * as React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Pagination from './Pagination'
import SearchList from './SearchList'

//一覧画面
const ListProf = (props:any) => {
  const [deletedPage, setDeletedPage] = useState(1)
  const [feed, setFeed] = useState<VtecxApp.Entry[]>([])
  const [firstIndexPage, setFirstIndexPage] = useState(1)
  const [lastIndexPage, setLastIndexPage] = useState(50)
  
  const feedLength = useRef(0)
  const lastPage = useRef(0)
  const getFeedLength = async() => {
    try {
        axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
        //データの総件数取得
        const res = await axios.get('/d/foo?f&c&l=*')
        feedLength.current = (Number(res.data.feed.title))
        lastPage.current = (Number(res.data.feed.title /1))
         
    } catch {
      alert('総件数の取得に失敗しました。')

    }
 }

  const putIndex = async(currentPage:number) => {
    try {
      let firstIndex= 1
      let lastIndex=50
     if(currentPage > firstIndexPage && currentPage > lastIndexPage){
        firstIndex = firstIndex + 50
        lastIndex = lastIndex + 50
        
      }
      axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
      await axios.get('/d/foo?f&_pagination='+firstIndex+','+lastIndex+'&l=1')
      setFirstIndexPage(firstIndex)
      setLastIndexPage(lastIndex)
     
    } catch {
      alert('indexが貼れませんでした。')
    }
    
  }
 
  const getPage = async(currentPage:number, retry_count:number)  => {
    try {
      //ページの取得
      axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
      const res = await axios.get('/d/foo?f&n='+ currentPage + '&l=1')
      setFeed(res.data)
      
    } catch(e) {
      const retry = () => {
        retry_count++

        const retryIndex = () => { 
          getPage(currentPage, retry_count)
      
        }
        if(retry_count > 9) {
          alert('ページが取得できませんでした')
          return false
          
        }else{
          setTimeout(() => retryIndex(),1000) 

        }
      }
      
      //indexが貼れていなかった場合10回までリトライ
      if(e.response.data.feed.title === "Please make a pagination index in advance.") {
       retry()
      //ページのリクエストが最終番号以降のリクエストが来た時にindexを追加で貼り直す
      } else if(e.response.data.feed.title === "Please set a positive number for Page number.") {
        putIndex(currentPage)
        retry()
      }

    } 
    
  }

  //削除関数
  const deleteEntry = async (entry:VtecxApp.Entry, index:number) => {
    try {
      axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
      
      if(entry && entry.link) {
         const key = entry.link[0].___href
         await axios.delete('/d'+ key)
         getFeedLength()
         putIndex(deletedPage)

         if(index === 0 && deletedPage !== 1){
           getPage(deletedPage -1, 0)
         } else {
           getPage(deletedPage, 0)
         }
         
      }
      alert('削除しました')

    } catch (e) {
      alert('削除できませんでした')

    }
  }

       return ( 
        <div>
        { feed.length > 0 ? 
        <div>
          <SearchList setFeed={setFeed} 
          feedLength={feedLength.current}
          lastPage={lastPage.current} />
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

                {feed.map((entry, index) => (
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
                     <td><button onClick={() => deleteEntry(entry, index)}>削除</button></td>  
              </tr>
              ))} 
            </table>
          </div>
        :
         <p>登録されていません</p>
        }
        <Pagination
         setDeletedPage={setDeletedPage} getFeedLength={getFeedLength}
         getPage={(e:number) => getPage(e, 0)} putIndex={(e:number) => putIndex(e)}
         feedLength={feedLength.current} lastPage={lastPage.current}
         lastIndexPage={lastIndexPage}
       />
        <button onClick={() => props.history.push('/RegisterProf')}>新規登録</button>
       </div> 
    )
  }
  export default withRouter(ListProf)




