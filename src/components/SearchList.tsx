import * as React from 'react'
import { useState } from 'react'


const SearchList = (_props:any) => {
    const [searchText, setSearchText] = useState('')
    const searchFeed = () => {
      _props.getFeedLength(searchText)
      _props.putIndex(1,searchText)
      _props.getPage(1,0, searchText)
    }
    return (
        <div>
          <input type="text" value={searchText} onChange={(e:any) => setSearchText(e.target.value)} />
          <button onClick={() => searchFeed()}>検索</button>
        </div>
    )
}

export default SearchList