import * as React from 'react'
import {useState} from 'react'
import { withRouter} from 'react-router-dom'
import axios from 'axios'

/*
削除成功時には削除後の一覧が表示されること
*/

const ProfEdit = (props:any) => {
    const editText = props.history.location.state.text
    const userdata = props.history.location.data
    const editdata = props.history.location.title
    const [text, setText] = useState(editText)
    console.log('userdata',userdata)
    console.log('editText', editText)
    console.log('editdata', editdata)

  console.log(props)
   const req: VtecxApp.Entry[] = [
      {    
          
          user:{
              name: editdata === 'name' ? text: userdata.name,
              email: editdata === 'email' ? text: userdata.email,
              memo: editdata === 'memo' ? text:userdata.memo,
              gender: editdata === 'gender' ? text: userdata.gender,
              job: editdata === 'job' ? text: userdata.job,
              birthday: editdata === 'birthday' ? text: userdata.birthday,
              address: editdata === 'address' ? text: userdata.address,
              height: editdata === 'height' ? text: userdata.height,
              select: editdata === 'select' ? text: userdata.select,
              check: editdata === 'check' ? text: userdata.check
          },
          link: [
              {
                  "___href": "/foo/1",
                  "___rel": "self"
              }
          ]
      }
  ]

  const putdata = async () => {
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
    const deletedata = () => {
      setText(editText.filter((event:any) => event.id) )
      putdata()
    }
    console.log('text', text)
     return (
     <div>
       <b>編集画面</b> <br />
       <input type="text" value={text} onChange={(e:any) => setText(e.target.value)} />
       <button onClick={deletedata}>削除</button>
       <button onClick={putdata}>更新</button>
     </div>
     )
   }
export default withRouter(ProfEdit)
   