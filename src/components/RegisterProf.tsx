import * as React from 'react'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const RegisterProf = (props:any) => {
    const [name, setName] =  useState('')
    const [email, setEmail] = useState('')
    const [memo, setMemo] = useState('')
    const [gender, setGender] = useState('')
    const [job, setJob] = useState('')
    const [birthday, setBirthday] = useState('')
    const [address, setAddress] = useState('')
    const [height, setHeight] = useState('')
    const [selectBox, setSelectBox] = useState('')
    const [checkBox, setCheckBox]  = useState('')

    const putFeed = async () => {
      
        try {
          axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
         const count = await axios.put('/d/foo?_addids=1')
         const req: VtecxApp.Entry[] = [
          {    
              user:{
                  name: name,
                  email: email,
                  memo: memo,
                  gender: gender,
                  job: job,
                  birthday: birthday,
                  address: address,
                  height: height,
                  select: selectBox,
                  check: checkBox
              },
              link: [
                  {
                      "___href": "/foo/"+ count.data.feed.title,
                      "___rel": "self"
                  }
              ]
          }
      ]
         
          const res = await axios.post('/d/',req)
          {props.history.push('/')}
          console.log(res)
          alert('登録しました')
        } catch (e) {
          alert('登録に失敗しました')
        }
      }
  
    
  return (
      <form>
        <b>登録画面</b>
         <TextComponent title='名前' value={name} onChange={setName}/>
         <TextComponent title='メールアドレス' value={email} onChange={setEmail}/>
         <TextComponent title='職業' value={job} onChange={setJob}/>
         <TextComponent title='住所' value={address} onChange={setAddress}/>
         <TextComponent title='身長' value={height} onChange={setHeight}/>
         <DateComponent value={birthday} onChange={setBirthday} />
         <RadioComponent value={gender} onChange={setGender} />
         <CheckComponent value={checkBox} onChange={setCheckBox} />
         <SelectComponent value={selectBox} onChange={setSelectBox} />
         <TextareaComponent value={memo} onChange={setMemo} />
         <ButtonComponent value={putFeed} />
      </form>
    )
  }
  
  export const TextComponent = (_props:any) => {
    return (
        <form>
            <input type="text" placeholder={_props.title} value={_props.value} onChange={(e:any) => _props.onChange(e.target.value)}　/><br />
         </form> 
    )
  }

  export const DateComponent = (_props:any) => {
      return (
          <form>
            <label htmlFor="calendar">生年月日:</label><br />
            <input type="date" max="9999-12-31" value={_props.value} onChange={(e:any) => _props.onChange(e.target.value)} /><br />
          </form>
      )
  }
  
  export const RadioComponent = (_props:any) => {
    return (
        <form>
          <input type="radio" name='gender' onChange={() => _props.onChange('男')} checked={_props.value === '男' && true} /><label htmlFor="gender">男</label>
          <input type="radio" name='gender' onChange={() => _props.onChange('女')} checked={_props.value === '女' && true} /><label htmlFor="gender">女</label><br />
        </form>
    )
  }
  export const CheckComponent = (_props:any) => {
    return (
         <form>
          <input type="checkbox" name='チェックボックス' onChange={() => _props.onChange('チェック1')} checked={_props.value === 'チェック1' && true} />チェック１
          <input type="checkbox" name='チェックボックス' onChange={() => _props.onChange('チェック2')} checked={_props.value === 'チェック2' && true}/>チェック2
          <input type="checkbox" name='チェックボックス' onChange={() => _props.onChange('チェック3')} checked={_props.value === 'チェック3' && true}/>チェック3<br />
         </form>
    )
  }
  export const SelectComponent = (_props:any) => {
    return (
        <form>
         <select value={_props.value} onChange={(e:any) => _props.onChange(e.target.value)}>
             <option value="サンプル１">サンプル１</option>
             <option value="サンプル２">サンプル２</option>
             <option value="サンプル３">サンプル３</option>
         </select><br />
        </form>
    )
  }
  export const TextareaComponent = (_props:any) => {
    return (
        <form>
          <textarea value={_props.value} onChange={(e:any) => _props.onChange(e.target.value)} placeholder="メモ"></textarea><br /> 
        </form>
    )
  }
const ButtonComponent = (_props:any) => {
    return (
        <form>
            <button onClick={_props.value}>登録</button>
        </form>
    )
} 
  
  export default withRouter(RegisterProf)