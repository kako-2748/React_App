import * as React from 'react'
import { useState } from 'react'


const SearchList = (_props:any) => {
    const [searchText, setSearchText] = useState('')
    const [searchFullText, setSearchFullText] = useState('')
    const [checkValue, setCheckValue] = useState([''])

    const searchFeed = () => {
      _props.getFeedLength(searchText, searchFullText, checkValue)
      _props.putIndex(1,searchText, searchFullText,checkValue)
      _props.getPage(1,0, searchText, searchFullText, checkValue)

    }
    
    const pushValue = (value:string) => {
      if(!checkValue.includes(value)) {
        const checked = ([...checkValue, value])
        const result = checked.filter((check:string) => check !== '')
        setCheckValue(result)

      }else if(checkValue.includes(value)) {
        const result = checkValue.filter((check:string) => check !== value && check !== '')
        setCheckValue(result)
      }
    }
    
    return (
        <form>
          <input type="text" placeholder="全文検索" value={searchFullText} onChange={(e:any) => setSearchFullText(e.target.value)} />
          <button type="button" onClick={() => searchFeed()}>検索</button><br />
          
          <input type="checkbox" name="check" value="name" onChange={() => pushValue("name")} />名前
          <input type="checkbox" name="check" value="email" onChange={() => pushValue("email")} />メール
          <input type="checkbox" name="check" value="job" onChange={() => pushValue("job")}  />職業     
          <input type="checkbox" name="check" value="address" onChange={() => pushValue("address")} />住所
          <input type="checkbox" name="check" value="height" onChange={() => pushValue("height")} />身長
          <input type="checkbox" name="check" value="birthday" onChange={() => pushValue("birthday")} />誕生日
          <input type="checkbox" name="check" value="gender" onChange={() => pushValue("gender")} />性別
          <input type="checkbox" name="check" value="check" onChange={() => pushValue("check")} />チェック
          <input type="checkbox" name="check" value="select" onChange={() => pushValue("select")} />セレクト
          <input type="checkbox" name="check" value="memo" onChange={() => pushValue("memo")} />メモ
          <input type="text" placeholder="各項目検索" value={searchText} onChange={(e:any) => setSearchText(e.target.value)} />
          <button type="button" onClick={() => searchFeed()}>検索</button>
        </form>
    )
}

export default SearchList