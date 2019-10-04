import * as React from 'react'
import { useState, useEffect, useMemo} from 'react'

//ページネーションコンポーネント
const Pagination = (_props:any) => {
    const [currentPage, setCurrentPage] = useState(1)

    const memoPutIndex = useMemo(() => {
      _props.putIndex(currentPage, ) 
    },[currentPage > 50])
  
    const memoGetFeedLength = useMemo(() => {
        _props.getFeedLength()
    },[])

    //画面表示処理
    useEffect(() => {
         memoGetFeedLength
         memoPutIndex
         _props.getPage(currentPage, 0)
         _props.setDeletedPage(currentPage)
        
    },[currentPage])

    return (
      <div>
        <b>総件数:{_props.feedLength}</b><br />
            <b>現在のページ:{currentPage}</b>
            <ul>
              <li><a href="javascript:void(0)"
              onClick={() => currentPage === 1 ? null: setCurrentPage(1) }>最初</a></li>
              <li><a href="javascript:void(0)"
              onClick={() => currentPage === 1 ? null: setCurrentPage(currentPage - 1)}>前へ</a></li>
              <li><a href="javascript:void(0)" 
              onClick={() => currentPage === _props.lastPage ? null: setCurrentPage(currentPage + 1)} >次へ</a></li>
              <li><a href="javascript:void(0)"
              onClick={() => currentPage === _props.lastPage ? null: setCurrentPage(_props.lastPage)}>最後</a></li>
            </ul>
     </div>  
    )
  
  }

export default Pagination
