import * as React from 'react'
import { useState } from 'react'


const SearchList = (_props:any) => {
    const [searchText, setSearchText] = useState('')
    const [searchFullText, setSearchFullText] = useState('')
    const [selectValue, setSelectValue] = useState('')

    const searchFull = () => {
      _props.getFeedLength(searchFullText)
      _props.putIndex(1,searchFullText)
      _props.getPage(1,0, searchFullText)

    }

    const searchFeed = () => {
      _props.getFeedLength(searchText,selectValue)
      _props.putIndex(1,searchText,selectValue)
      _props.getPage(1,0, searchText,selectValue)

    }

    return (
        <div>
          <input type="text" placeholder="全文検索" value={searchFullText} onChange={(e:any) => setSearchFullText(e.target.value)} />
          <button onClick={() => searchFull()}>検索</button>
          
          <select value={selectValue} onChange={(e:any) => setSelectValue(e.target.value)}>
            <option disabled selected value="">選択してください</option>
            <option value="name">名前</option>
            <option value="email">メール</option>
            <option value="job">職業</option>
            <option value="address">住所</option>
            <option value="height">身長</option>
            <option value="birthday">誕生日</option>
            <option value="gender">性別</option>
            <option value="check">チェック</option>
            <option value="select">セレクト</option>
            <option value="memo">メモ</option>
          </select>
          <input type="text" placeholder="各項目検索" value={searchText} onChange={(e:any) => setSearchText(e.target.value)} />
          <button onClick={() => searchFeed()}>検索</button>
        </div>
    )
}

export default SearchList