import * as React from 'react'
import { useState } from 'react'
import axios from 'axios'

const SearchList = (_props:any) => {
    const [searchText, setSearchText] = useState('')


    const searchFeed = async() => {
        try {
          axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
          const res = await axios.get(
            '/d/foo?f&|user.name-ft-'+searchText
            +'&|user.email-ft-'+searchText+'&|user.gender-ft-'+searchText
            +'&|user.memo-ft-'+searchText+'&|user.birthday-ft-'+searchText
            +'&|user.check-ft-'+searchText+'&|user.select-ft-'+searchText
            +'&|user.job-ft-'+searchText+'&|user.address-ft-'+searchText
            +'&|user.height-ft-'+searchText+'&|user.weight-ft-'+searchText
            +'&c&l=*')
          _props.feedLength = (Number(res.data.feed.title))

          const index = await axios.get(
            '/d/foo?f&|user.name-ft-'+searchText
            +'&|user.email-ft-'+searchText+'&|user.gender-ft-'+searchText
            +'&|user.memo-ft-'+searchText+'&|user.birthday-ft-'+searchText
            +'&|user.check-ft-'+searchText+'&|user.select-ft-'+searchText
            +'&|user.job-ft-'+searchText+'&|user.address-ft-'+searchText
            +'&|user.height-ft-'+searchText+'&|user.weight-ft-'+searchText
            +'&_pagination=1,50&l=5')
          _props.lastPage = (Number(index.data.feed.title))

          const res2 = await axios.get(
            '/d/foo?f&|user.name-ft-'+searchText
            +'&|user.email-ft-'+searchText+'&|user.gender-ft-'+searchText
            +'&|user.memo-ft-'+searchText+'&|user.birthday-ft-'+searchText
            +'&|user.check-ft-'+searchText+'&|user.select-ft-'+searchText
            +'&|user.job-ft-'+searchText+'&|user.address-ft-'+searchText
            +'&|user.height-ft-'+searchText+'&|user.weight-ft-'+searchText
            +'&n=1&l=5')
          _props.setFeed(res2.data)
          console.log(_props.feedLength)
          console.log(_props.lastPage)
          
        } catch (e) {
          alert('error')
          console.log(e)
        }
      
    }
    
    return (
        <div>
          <input type="text" value={searchText} onChange={(e:any) => setSearchText(e.target.value)} />
          <button onClick={() => searchFeed()}>検索</button>
        </div>
    )
}

export default SearchList