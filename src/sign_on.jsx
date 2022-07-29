import { useEffect, useState } from "react";
import { home_btn } from "./home";
import { post_req } from "./utils/requests-api";

const Sign_on = () =>{
    useEffect(() => {
        document.title = `Регистрация`;
    })
    // const values = Array(7).fill('', 0,7)

    const values = {
        name: '',
        surname: '',
        patronym: '',
        school: '',
        class: '',
        email: '',
        phone: ''
    }
    const falses = (()=>{
        const a = []
        for (let i in values)
            a[i] = !!values[i]
        return a
    })()
    const [invalids, setInvalids] = useState(falses)    
    console.log(invalids)      
    const subtext = <span style={{color:'red', fontSize: '80%'}}>*недопустимый формат</span>
    const input_type = (type, name) =>{
        return <input type={type} name={name} onChange={e=>values[name]=e.target.value}/>
    }
    
    const register = (data) =>{

    const index_invalid = checkRegister(data)
      
    if(index_invalid[0] === undefined){
        let json = {
          name: data[0],
          since_date: data[1],
          to_date: data[2],
          distance: data[3],
          sex: data[4]==='М'? 1:0,
          since_age: data[5],
          to_age: data[6]
        }
        // post_req('/api/competition', JSON.stringify(json))
        console.log(JSON.stringify(json))
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
                case 'patronym':
                    if (!new RegExp('^[a-zA-Zа-яА-Я]+$').test(data[i])) inds.push(i)
                    break
                default: break
            }
        }
            // if (data[i] === '')
                // inds.push(i)
        // }
        // if (!new RegExp('^[0-9]+$').test(data[3])) inds.push(3)
        // else if (!new RegExp('^[0-9]+$').test(data[5])) inds.push(5)
        // else if (!new RegExp('^[0-9]+$').test(data[6])) inds.push(6)
        //!new RegExp('^[a-zA-Zа-яА-Я]+$').test(data[i]) || 
        // console.log(data)
        // console.log(inds)
        return inds
      }


    return(
        <>
            {home_btn}
            <table>
                <caption style={{backgroundColor: 'orange'}}>Регистрация:</caption>
                <tbody>
                    <tr><td>Имя: </td><td>{input_type('text', 'name')}</td></tr>
                    <tr><td></td><td>{invalids['name']&&subtext}</td></tr>
                    <tr><td>Фамилия: </td><td>{input_type('text', 'surname')}</td></tr>
                    <tr><td></td><td>{invalids['surname']&&subtext}</td></tr>
                    <tr><td>Отчество: </td><td>{input_type('text', 'patronym')}</td></tr>
                    <tr><td></td><td>{invalids['patronym']&&subtext}</td></tr>
                    <tr><td>Школа: </td><td>{input_type('text', 'school')}</td></tr>
                    <tr><td></td><td>{invalids['school']&&subtext}</td></tr>
                    <tr><td>Класс: </td><td>{input_type('text', 'class')}</td></tr>
                    <tr><td></td><td>{invalids['class']&&subtext}</td></tr>
                    <tr><td>Почта: </td><td>{input_type('text', 'email')}</td></tr>
                    <tr><td></td><td>{invalids['email']&&subtext}</td></tr>
                    <tr><td>Телефон: </td><td>{input_type('tel', 'phone')}</td></tr>
                    <tr><td></td><td>{invalids['phone']&&subtext}</td></tr>

                    <tr><td align="center" colSpan={2}><input type='button' value='Регистрация' style={{display: 'inline-block', width:'100%'}} onClick={()=>register(values)}/></td></tr>
                </tbody>
            </table>
        </>
    )
}

export default Sign_on