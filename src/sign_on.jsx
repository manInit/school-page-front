import { useEffect } from "react";
import { home_btn } from "./home";
import { put_req, post_req } from "./utils/requests-api";


const Sign_on = () =>{
    useEffect(() => {
        document.title = `Регистрация`;
    })

    const subtext = <span style={{color:'red', fontSize: '80%'}}>*недопустимый формат</span>

    return(
        <>
            {home_btn}
            <table>
                <caption style={{backgroundColor: 'orange'}}>Регистрация:</caption>
                <tbody>
                    <tr><td>Имя: </td><td>{input_type('text', 'name')}</td></tr>
                    <tr><td></td><td>{subtext}</td></tr>
                    <tr><td>Фамилия: </td><td>{input_type('text', 'surname')}</td></tr>
                    <tr><td></td><td>{subtext}</td></tr>
                    <tr><td>Отчество: </td><td>{input_type('text', 'patronym')}</td></tr>
                    <tr><td></td><td>{subtext}</td></tr>
                    <tr><td>Школа: </td><td>{input_type('text', 'ed_organization')}</td></tr>
                    <tr><td></td><td>{subtext}</td></tr>
                    <tr><td>Класс: </td><td>{input_type('text', 'ed_class')}</td></tr>
                    <tr><td></td><td>{subtext}</td></tr>
                    <tr><td>Почта: </td><td>{input_type('text', 'email')}</td></tr>
                    <tr><td></td><td>{subtext}</td></tr>
                    <tr><td>Телефон: </td><td>{input_type('tel', 'phone')}</td></tr>
                    <tr><td></td><td>{subtext}</td></tr>

                    <tr><td align="center" colSpan={2}><input type='button' value='Регистрация' style={{display: 'inline-block', width:'100%'}} onClick={e=>register(e.target)}/></td></tr>
                </tbody>
            </table>
        </>
    )
}

export default Sign_on

const input_type = (type, name) =>{
    return <input type={type} name={name} />
}

const register = (target) =>{
    const tbody = target.parentElement.parentElement.parentElement

    const data = []
    for(let i=0; i<tbody.childElementCount-1; i+=2){
      data.push(tbody.childNodes[i].lastChild.lastChild.value)
      tbody.childNodes[i+1].lastChild.lastChild.textContent = null
    }
    
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
  }
  else
    for(let i=0; i<index_invalid.length; i++)
      tbody.childNodes[index_invalid[i]+1].lastChild.lastChild.textContent = '*недопустимый формат'
}

const checkRegister = (data) =>{
    let inds = []
    // if (invalid_time_interval(data[1], data[2]))  inds.push(2,4) //switch since_date and to_date
    if (data[5] > data[6]) inds.push(10,12) //switch since_age and to_age
    if (!new RegExp('^[a-zA-Zа-яА-Яё ]+$').test(data[0])) inds.push(0)
    for(let i=0; i<data.length; i++){
      if (data[i] === '')
        inds.push(i*2)
    }
    if (!new RegExp('^[0-9]+$').test(data[3])) inds.push(3)
    else if (!new RegExp('^[0-9]+$').test(data[5])) inds.push(5)
    else if (!new RegExp('^[0-9]+$').test(data[6])) inds.push(6)
    //!new RegExp('^[a-zA-Zа-яА-Я]+$').test(data[i]) || 
    return inds
  }