import { useState } from "react"
import Popup_modal from "../popup/popup_modal";
const values ={
    name: 'Вова',
    surname: 'Гельштейн',
    fatherName: 'Максимович',
    educationalOrganization: 'мяумяуСОШ',
    educationalClass: '10В',
    email: 'чёта',
    phoneNumber: '+7832923'
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
    const [active_span, set_active_span] = useState()    
    let new_value
    const [span_text, set_span_text] = useState(values)    
    console.log(span_text)
    const [popup_visible, set_popup_visible] = useState(false)    
    const [invalids, setInvalids] = useState(false)
    const input_new_value = <input type='text' defaultValue = {values[active_span]} onChange={(e)=>{if(e.target.value!==undefined) new_value = e.target.value}} />
    const line_field = (lable, field) =>{
        return(
            <>
                <tr><td>{lable} </td><td>{span_text[field]}</td><td>{edit_btn(field, '/api/athlet/name')}</td></tr>
            </>
        )
    }
    const change_value = (target, link) =>{

        

        console.log(`${active_span} `)
        console.log(values)
        switch(active_span){
            case 'name':
            case 'surname':
            case 'fatherName':
                show_invalid(new RegExp('^[a-zA-Zа-яА-Я]+$').test(new_value) && new_value!==undefined)
            break
            default: break
        }
    }
    const show_invalid = (cond) =>{
        console.log(cond, invalids, new_value)
        if(cond === invalids){
            setInvalids(!cond)
        }
        if (cond){
            set_popup_visible(false)
            span_text[active_span] = new_value
            set_span_text(arr => ({...arr}))
        }

    }
    const edit_btn = (field, link) =>{
        return <input type="button" value="✐" onClick={() => { set_popup_visible(true); set_active_span(field)}}></input>
    }
    return(
        <>
            <Popup_modal active={popup_visible} setActive={set_popup_visible}>
                {popup_visible&&input_new_value}
                <br></br>
                {invalids&&subtext}
                <br></br><br></br>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <input type='button' value='изменить' onClick={()=>change_value()}/>
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
