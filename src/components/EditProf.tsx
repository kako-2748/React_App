import * as React from 'react'
import {useState} from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import {TextComponent, DateComponent, RadioComponent, CheckComponent, SelectComponent, TextareaComponent} from './RegisterProf'
const EditProf = (props:any) => {
    const input_user = props.history.location.data
    const input_value = props.history.location.title
    const input_key = input_user.link[0].___href
    const [text, setText] = useState(props.history.location.state.text)
    
  const putFeed = async () => {
      try {
        axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
        const req: VtecxApp.Entry[] = [
          {    
              
              user:{
                  name: input_value === 'name' ? text: input_user.user.name,
                  email: input_value === 'email' ? text: input_user.user.email,
                  memo: input_value === 'memo' ? text: input_user.user.memo,
                  gender: input_value === 'gender' ? text: input_user.user.gender,
                  job: input_value === 'job' ? text: input_user.user.job,
                  birthday: input_value === 'birthday' ? text: input_user.user.birthday,
                  address: input_value === 'address' ? text: input_user.user.address,
                  height: input_value === 'height' ? text: input_user.user.height,
                  select: input_value === 'select' ? text: input_user.user.select,
                  check: input_value === 'check' ? text: input_user.user.check,
              },
              link: [
                  {
                      "___href": input_key,
                      "___rel": "self"
                  }
              ],
              id: input_user.id
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

    
     return (
     <div>
      <b>編集画面</b> <br />
      { props.history.location.type === 'text' &&<TextComponent value={text} onChange={setText} />}
      { input_value === 'gender' &&<RadioComponent value={text} onChange={setText}/>}
      { input_value === 'birthday' && <DateComponent value={text} onChange={setText}/>} 
      { input_value === 'check' && <CheckComponent value={text} onChange={setText} />}
      { input_value === 'select' && <SelectComponent value={text} onChange={setText} />} 
      { input_value === 'memo' &&<TextareaComponent value={text} onChange={setText} />}
      <button onClick={putFeed}>更新</button>
     </div>
     )
   }
export default withRouter(EditProf)
   