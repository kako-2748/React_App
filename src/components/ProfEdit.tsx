import * as React from 'react'
import {useState} from 'react'
import { withRouter} from 'react-router-dom'
import axios from 'axios'

const ProfEdit = (props:any) => {
    const editText = props.history.location.state.text
    const userdata = props.history.location.data
    const editData = props.history.location.title
    const dataId = userdata.link[0]
    const [text, setText] = useState(editText)

    console.log('userdata',userdata)
    console.log('editText', editText)
    console.log('title',editData)
    

    const req: VtecxApp.Entry[] = [
      {    
          
          user:{
              name: editData === 'name' ? text: userdata.user.name,
              email: editData === 'email' ? text: userdata.user.email,
              memo: editData === 'memo' ? text: userdata.user.memo,
              gender: editData === 'gender' ? text: userdata.user.gender,
              job: editData === 'job' ? text: userdata.user.job,
              birthday: editData === 'birthday' ? text: userdata.user.birthday,
              address: editData === 'address' ? text: userdata.user.address,
              height: editData === 'height' ? text: userdata.user.height,
              select: editData === 'select' ? text: userdata.user.select,
              check: editData === 'check' ? text: userdata.user.check,
          },
          link: [
              {
                  "___href": dataId.___href,
                  "___rel": "self"
              }
          ],
          id: userdata.id
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

    const deletedata = async () => {
      setText('')
      try {
        axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
        req[0].id += '?_delete'
        {props.history.push('/')}
        const res = await axios.put('/d/foo',req)
        console.log(res)
        alert('更新しました')
      } catch (e) {
        alert('更新に失敗しました')
      }
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
   