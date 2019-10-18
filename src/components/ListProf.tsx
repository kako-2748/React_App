import * as React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

import Pagination from './Pagination'
import SearchList from './SearchList'

//一覧画面
const ListProf:React.FC = (props:any) => {
  const [deletedPage, setDeletedPage] = useState(1)
  const [feed, setFeed] = useState<VtecxApp.Entry[]>([])
  const [firstIndexPage, setFirstIndexPage] = useState(1)
  const [lastIndexPage, setLastIndexPage] = useState(50)
  const [selectTitle, setSelectTitle] = useState([''])
  const [fullText, setFullText] = useState('')
  const [text, setText] = useState('')

  const feedLength = useRef(0)
  const lastPage = useRef(0)
  const search_url = useRef('')

  const getFeedLength = async(searchText:string, searchFullText:string, checkValue:string[]) => {
    try {
        search_url.current = '&|user.name-rg-.*'+searchFullText+'.*'
        +'&|user.email-rg-.*'+searchFullText+'.*&|user.gender-rg-.*'+searchFullText+'.*'
        +'&|user.memo-rg-.*'+searchFullText+'.*&|user.birthday-rg-.*'+searchFullText+'.*'
        +'&|user.check-rg-.*'+searchFullText+'.*&|user.select-rg-.*'+searchFullText+'.*'
        +'&|user.job-rg-.*'+searchFullText+'.*&|user.address-rg-.*'+searchFullText+'.*'
        +'&|user.height-rg-.*'+searchFullText+'.*'
    
        axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
        //データの総件数取得
        if(searchText === '' && searchFullText === '') {
          const res = await axios.get('/d/foo?f&c&l=*')
          feedLength.current = (Number(res.data.feed.title))
          lastPage.current = (Math.ceil(res.data.feed.title / 5))

        } else if(searchFullText !== '') {
          const res = await axios.get('/d/foo?f'+search_url.current+'&c&l=*')
          feedLength.current = (Number(res.data.feed.title))
          lastPage.current = (Math.ceil(res.data.feed.title / 5))

        } else if(searchText !== '' && checkValue !== ['']) {
          const str = checkValue.join(`-rg-.*${searchText}.*&|user.`)
          const res = await axios.get('/d/foo?f&|user.'+str+'&c&l=*')
          feedLength.current = (Number(res.data.feed.title))
          lastPage.current = (Math.ceil(res.data.feed.title / 5))

        }

    } catch {
      alert('総件数の取得に失敗しました。')

    }
 }

  const putIndex = async(currentPage:number, searchText:string, searchFullText:string, checkValue:string[]) => {
    try {
      let firstIndex= firstIndexPage
      let lastIndex= lastIndexPage

      if(currentPage > firstIndexPage && currentPage > lastIndexPage){
        firstIndex = firstIndex + 50
        lastIndex = lastIndex + 50

      }

      axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
  
      if(searchText === '' && searchFullText === '') {
        await axios.get('/d/foo?f&_pagination='+firstIndex+','+lastIndex+'&l=5')

      } else if(searchFullText !== '') {
        await axios.get('/d/foo?f&_pagination='+firstIndex+','+lastIndex+search_url.current+'&l=5')

      } else if(searchText !== '' && checkValue !== ['']) {
        const str = checkValue.join(`-rg-.*${searchText}.*&|user.`)
        await axios.get('/d/foo?f&|user.'+str+'&_pagination='+firstIndex+','+lastIndex+'&l=5')

      }
      setFirstIndexPage(firstIndex)
      setLastIndexPage(lastIndex)

    } catch {
      alert('indexが貼れませんでした。')

    } 
  }
 
  const getPage = async(currentPage:number, retry_count:number, searchText:string,searchFullText:string, checkValue:string[])  => {
    try {
      axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
      
      //ページの取得
      if(searchText === '' && searchFullText === '') {
        const res = await axios.get('/d/foo?f&n='+ currentPage + '&l=5')
        setFeed(res.data)
        
      } else if(searchFullText !== '') {
        const res = await axios.get('/d/foo?f'+search_url.current+'&n='+ currentPage + '&l=5')
        setFeed(res.data)
        setFullText(searchFullText)
       
      } else if(searchText !== '' && checkValue !== ['']) {
          const str = checkValue.join(`-rg-.*${searchText}.*&|user.`)
          const res = await axios.get('/d/foo?f&|user.'+ str+'&n='+ currentPage + '&l=5')
          setFeed(res.data)
          setSelectTitle(checkValue)
          setText(searchText)

        }

    } catch(e) {
      const retry = () => {
        retry_count++

        const retryIndex = () => { 
          getPage(currentPage, retry_count, searchText,searchFullText, checkValue)

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
        putIndex(currentPage, searchText,searchFullText, checkValue)
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
         getFeedLength('', '', [])
         putIndex(deletedPage,'', '', [])

         if(index === 0 && deletedPage !== 1){
           getPage(deletedPage -1, 0, '', '', [''])
         } else {
           getPage(deletedPage, 0, '', '', [''])
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
          <SearchList getFeedLength={getFeedLength}
          putIndex={putIndex} getPage={getPage} />
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
         getPage={(e:number) => getPage(e, 0, text, fullText, selectTitle)} 
         putIndex={(e:number) => putIndex(e, text,fullText, selectTitle)}
         setDeletedPage={setDeletedPage} getFeedLength={getFeedLength}
         feedLength={feedLength.current} lastPage={lastPage.current}
         lastIndexPage={lastIndexPage} text={text} selectTitle={selectTitle}
         fullText={fullText} />
        <button onClick={() => props.history.push('/RegisterProf')}>新規登録</button>
       </div> 
    )
  }

  export default withRouter(ListProf)




