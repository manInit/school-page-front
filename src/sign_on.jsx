import { useEffect, useState } from "react";
import { home_btn } from "./home";
import { post_req } from "./utils/requests-api";


const values = {
    name: '',
    surname: '',
    fatherName: '',
    educationalOrganization: '',
    educationalClass: '',
    email: '',
    phoneNumber: ''
}
const falses = (()=>{
    const a = []
    for (let i in values)
        a[i] = !!values[i]
    return a
})()

const Sign_on = () =>{
    useEffect(() => {
        document.title = `Регистрация`;
    })
    // const values = Array(7).fill('', 0,7)
    const [invalids, setInvalids] = useState(falses)    
    // console.log(invalids)      
    const subtext = <span style={{color:'red', fontSize: '80%'}}>*недопустимый формат</span>
    const input_type = (type, name) =>{
        return <input type={type} name={name} onChange={e=>{values[name]=e.target.value}}/>
    }
    
    const register = (data) =>{

    const index_invalid = checkRegister(data)
      
    if(index_invalid[0] === undefined){
        // post_req('/api/competition', JSON.stringify(json))
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
        // if (!new RegExp('^[a-zA-Zа-яА-Яё ]+$').test(data[0])) inds.push(0)
        for(let i in data){
            switch(i){
                case 'name':
                case 'surname':
                case 'fatherName':
                    if (!new RegExp('^[a-zA-Zа-яА-Я]+$').test(data[i])) inds.push(i)
                break
                default: break
            }
        }
        // }
        // else if (!new RegExp('^[0-9]+$').test(data[6])) inds.push(6)
        return inds
      }
    const line_field = (lable, field, type) =>{
        return(
            <>
                <tr><td>{lable} </td><td>{input_type(type, field)}</td></tr>
                <tr><td></td><td>{invalids[field]&&subtext}</td></tr>
            </>
        )
    }

    return(
        <>
            {home_btn}
            <table>
                <caption style={{backgroundColor: 'orange'}}>Регистрация:</caption>
                <tbody>
                    {line_field('Имя:','name', 'text')}
                    {line_field('Фамилия:','surname', 'text')}
                    {line_field('Отчество:','fatherName', 'text')}
                    {line_field('Школа:','educationalOrganization', 'text')}
                    {line_field('Класс:','educationalClass', 'text')}
                    {line_field('Почта:','email', 'email')}
                    {line_field('Телефон:','phone', 'tel')}
                    <tr><td align="center" colSpan={2}><input type='button' value='Регистрация' style={{display: 'inline-block', width:'100%'}} onClick={()=>register(values)}/></td></tr>
                </tbody>
            </table>
        </>
    )
}

export default Sign_on