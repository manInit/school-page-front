import { useEffect, useState } from "react";
import { home_btn } from "./home";

const values = {
    email: '',
    password: ''
}
const falses = (()=>{
    const a = []
    for (let i in values)
        a[i] = !!values[i]
    return a
})()

const Sign_in = () =>{
    useEffect(() => {
        document.title = `Авторизация`;
    })
    const [invalids, setInvalids] = useState(falses)    
    // console.log(invalids)      
    const subtext = <span style={{color:'red', fontSize: '80%'}}>*недопустимый формат</span>
    const input_type = (type, name) =>{
        return <input type={type} name={name} onChange={e=>values[name]=e.target.value}/>
    }
    
    const register = (data) =>{

    const index_invalid = checkRegister(data)
      
    if(index_invalid[0] === undefined){
        // get_req('/api/competition', JSON.stringify(json))
        console.log(JSON.stringify(data))
        // window.close();
      }else{
        for(let i in data)
            invalids[i] = index_invalid.indexOf(i)>-1
        setInvalids(arr => ({...arr}))
      }
    }
    
    const checkRegister = (data) =>{
        let inds = []
        for(let i in data){
            switch(i){
                case 'email':
                    // if (!new RegExp('^[a-zA-Zа-яА-Я]+$').test(data[i])) inds.push(i)
                break
                case 'password':

                break
                default: break
            }
        }
        // }
        // else if (!new RegExp('^[0-9]+$').test(data[6])) inds.push(6)
        return inds
      }

    return(
        <>
            {home_btn}
            <table>
                <caption style={{backgroundColor: 'orange'}}>Вход:</caption>
                <tbody>
                    <tr><td>што-то: </td><td>{input_type('text', 'email')}</td></tr>
                    <tr><td></td><td>{invalids['email']&&subtext}</td></tr>
                    <tr><td>Пароль: </td><td>{input_type('password', 'password')}</td></tr>
                    <tr><td></td><td>{invalids['password']&&subtext}</td></tr>

                    <tr><td align="center" colSpan={2}><input type='button' value='Войти' style={{display: 'inline-block', width:'100%'}} onClick={()=>register(values)}/></td></tr>
                </tbody>
            </table>
        </>
    )
}

export default Sign_in