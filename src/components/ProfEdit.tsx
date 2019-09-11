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
    
  const putdata = async () => {
      try {
        axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
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
        const res = await axios.put('/d/foo',req)
        {props.history.push('/')}
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
       {props.history.location.type === 'text' &&
         <input type="text" value={text} onChange={(e:any) => setText(e.target.value)} />
       }
       { editData === 'gender' &&
        <form>
         <input type="radio" name="gender" value={text} onChange={() => setText('男')} /><label htmlFor="gender">男</label>
         <input type="radio" name="gender" value={text} onChange={() => setText('女')} /><label htmlFor="gender">女</label>
        </form>
       }

       { editData === 'birthday' &&
       <form>
        <label htmlFor="calendar">生年月日:</label><br />
        <input type="date" max="9999-12-31" value={text} onChange={(e:any) => setText(e.target.value)} /><br />
       </form>
      }
       
     { editData === 'check' &&
       <form>
        <input type="checkbox" name='check' onChange={() => setText('チェック1')} />チェック１
        <input type="checkbox" name='check' onChange={() => setText('チェック2')} />チェック2
        <input type="checkbox" name='check' onChange={() => setText('チェック3')} />チェック3<br />
      </form>
      }
     { editData === 'select' &&
        <form>
         <select value={text} onChange={(e:any) => setText(e.target.value)}>
            <option value="サンプル１">サンプル１</option>
            <option value="サンプル２">サンプル２</option>
            <option value="サンプル３">サンプル３</option>
        </select>
       </form>
    } 
    { editData === 'memo' &&
      <form>
      <textarea  value={text} onChange={(e:any) => setText(e.target.value)} placeholder="メモ"></textarea><br /> 
    </form>
    }
       <button onClick={putdata}>更新</button>
     </div>
     )
   }
export default withRouter(ProfEdit)
   