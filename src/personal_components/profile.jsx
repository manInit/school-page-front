import { useState } from "react"
import Popup_modal from "../popup/popup_modal";
const values ={
    name: <span>Вова</span>,
    surname: <span>Гельштейн</span>,
    fatherName: <span>Максимович</span>,
    educationalOrganization: <span>мяумяуСОШ</span>,
    educationalClass: <span>10В</span>,
    email: <span>чёта</span>,
    phoneNumber: <span>+7832923</span>
}
// const values ={
//     name: 'Вова',
//     surname: 'Гельштейн',
//     fatherName: 'Максимович',
//     educationalOrganization: 'мяумяуСОШ',
//     educationalClass: '10В',
//     email: 'чёта',
//     phoneNumber: '+7832923'
// }



const subtext = <span style={{color:'red', fontSize: '80%'}}>*недопустимый формат</span>
const input_type = (type, name) =>{
    return <input type={type} name={name} onChange={e=>{values[name]=e.target.value}}/>
}


const Profile = () =>{
    const [span_text, set_span_text] = useState()    
    const [popup_visible, set_popup_visible] = useState(false)    
    const [invalids, setInvalids] = useState(false)    
    const line_field = (lable, field) =>{
        return(
            <>
                <tr><td>{lable} </td><td>{values[field]}</td><td>{edit_btn(field, '/api/athlet/name')}</td></tr>
            </>
        )
    }
    const change_value = (field, target, link) =>{
        console.log(`${field} `)
        console.log(values)
        switch(field){
            case 'name':
            case 'surname':
            case 'fatherName':
                show_invalid(new RegExp('^[a-zA-Zа-яА-Я]+$').test(values[field]), field)
            break
            default: break
        }
    }
    const show_invalid = (cond, field) =>{
        if(cond === invalids[field]){
            invalids[field] = !cond
            setInvalids(arr => ({...arr}))
        }

    }
    const edit_btn = (field, link) =>{
        return <input type="button" value="✐" onClick={() => {set_span_text(values[field].textContent); set_popup_visible(true)}}></input>
    }
    return(
        <>
            <Popup_modal active={popup_visible} setActive={set_popup_visible}>
                <input type='text' placeholder={span_text}/><br></br>
                {subtext}
                <br></br><br></br>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <input type='button' value='изменить' onClick={()=>{set_popup_visible(false)}}/>
                </div>
            </Popup_modal>
            <table>
            <tbody>
                {line_field('Имя', 'name', 'text')}
                {line_field('Фамилия:','surname', 'text')}
                {line_field('Отчество:','fatherName', 'text')}
                {line_field('Школа:','educationalOrganization', 'text')}
                {line_field('Класс:','educationalClass', 'text')}
                {line_field('Почта:','email', 'email')}
                {line_field('Телефон:','phoneNumber', 'tel')}
            </tbody>
        </table>
        </>
    )
}

export default Profile
