import * as React from 'react'
import {useState} from 'react'
import { withRouter} from 'react-router-dom'
import axios from 'axios'

/*
一覧から任意のデータを選択し、そのデータの編集画面に遷移する。
編集画面で選択したデータの編集が行えること
編集画面に「更新」ボタンを押下し、データを更新する。成功時に一覧画面に遷移する。一覧には編集後のデータが表示されていること
失敗時にはエラー内容をalertで表示すること
一覧から任意のデータを選択し、「削除」ボタンを押下することでそのデータを削除する。
削除成功時には削除後の一覧が表示されること
*/


const ProfEdit = (props:any) => {
    const [text, setText] = useState(props.location.state.text)

    const req: VtecxApp.Entry[] = [
      {    
          user:{
              name: name,
             
          },
          link: [
              {
                  "___href": "/foo/1",
                  "___rel": "self"
              }
          ]
      }
  ]

  const putdata = async (props:any) => {
      try {
        axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
        const res = await axios.put('/d/foo',req)
        {props.history.push('/')}
        console.log(res)
        alert('更新しました')
      } catch (e) {
        alert('更新に失敗しました')
      }
    }
     return (
     <div>
       <b>編集画面</b> <br />
       <input type="text" value={text} onChange={(e:any) => setText(e.target.value)} />
       <button>削除</button>
       <button onClick={putdata}>更新</button>
     </div>
     )
   }
export default withRouter(ProfEdit)
   