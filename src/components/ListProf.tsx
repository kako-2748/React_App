import * as React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Pagination from './Pagination'

/*
currentPage、feedLength、lastPageはListProfで使用していないのでPaginationの描画用の変数とすべきです。
currentPageに関してはListProfでは描画には使用していないので、getPageに引数として渡すだけでいいと思います。
indexがまだ貼れていないエラーはステータスコードでは判断してはいけないと注意したはずです。
indexがまだ貼れていないエラーが発生しても、非同期でindexを貼る処理をフレームワーク側で行っています。なので、再度_paginationリクエストをしてはいけません。
66〜68行目の処理と79〜81行目の処理は同じ処理ですよね？冗長なので一つにまとめてください。
*/

//一覧画面
const ListProf = (props:any) => {
  const [feed, setFeed] = useState<VtecxApp.Entry[]>([])
  const [resdata, setResdata] = useState()

  const feedLength = useRef(0)
  const lastPage = useRef(0)
  const getFeedLength = async() => {
    try {
        axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
        //データの総件数取得
        const res = await axios.get('/d/foo?f&c&l=*')
        feedLength.current = (Number(res.data.feed.title))
        //index作成
        const index = await axios.get('/d/foo?f&_pagination=1,50&l=5')
        lastPage.current = (Number(index.data.feed.title))
         
    } catch {
      alert('データの取得に失敗しました。')

    }
 }

  const getPage = async(currentPage:number)  => {
    try {
      axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
      const res = await axios.get('/d/foo?f&n='+ currentPage + '&l=5')
      setFeed(res.data)
      setResdata(res)

    } catch {
     alert('ページが取得できませんでした。')
    
     if(resdata === undefined) {
      let count = 0
      const retryIndex = async() => { 
        axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
       
        
        count++
        
        if(count > 9 ) {
             clearInterval(loopRetryIndex)
           
           } 
      }
    const loopRetryIndex = setInterval(retryIndex,1000) 
  } 
 }
}

  //削除関数
  const deleteEntry = async (entry:VtecxApp.Entry, currentPage:number) => {
    try {
      axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
      if(entry && entry.link) {
         const key = entry.link[0].___href
         await axios.delete('/d'+ key)
         getFeedLength()
         getPage(currentPage)
         console.log(entry)
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
                   <td><button onClick={() => deleteEntry(entry,1)}>削除</button></td>  
            </tr>
              ))} 
        </table>
        </div>
        :
         <p>登録されていません</p>
        }
        <Pagination
         getPage={(e:any) => getPage(e)} getFeedLength={() => getFeedLength()}
         feedLength={feedLength.current} lastPage={lastPage.current}
       />
        <button onClick={() => props.history.push('/RegisterProf')}>新規登録</button>
       </div> 
    )
  }
  export default withRouter(ListProf)



