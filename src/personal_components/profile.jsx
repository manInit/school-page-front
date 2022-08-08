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

const subtext = <span style={{color:'red', fontSize: '80%'}}>*недопустимый формат</span>

const Profile = () =>{
    const [chosen_span, set_chosen_span] = useState()
    
    let new_value
    let put_link
    const [data, set_data] = useState(values)    
    console.log(data)
    const [popup_visible, set_popup_visible] = useState(false)    
    const [invalid, setInvalid] = useState(false)
    const edit_data = <input type='text' defaultValue = {values[chosen_span]} onChange={(e)=>{if(e.target.value!==undefined) new_value = e.target.value}} />
    const view_data = (lable, field, type, link) =>{
        return(
            <>
                <tr><td>{lable} </td><td>{data[field]}</td><td>{edit_btn(field, type, link)}</td></tr>
            </>
        )
    }
    const change_value = (link) =>{

        console.log(`${chosen_span} `)
        console.log(values)
        switch(chosen_span){
            case 'name':
            case 'surname':
            case 'fatherName':
                show_invalid(new RegExp('^[a-zA-Zа-яА-Я]+$').test(new_value) && new_value!==undefined)
            break
            default: break
        }
    }
    const show_invalid = (cond) =>{
        console.log(cond, invalid, new_value)
        if(cond === invalid){
            setInvalid(!cond)
        }
        if (cond){
            set_popup_visible(false)
            data[chosen_span] = new_value
            set_data(arr => ({...arr}))
            //put_req(put_link)
        }

    }
    const edit_btn = (field, type, link) =>{
        return <input type="button" value="✐" onClick={() => { set_popup_visible(true); set_chosen_span(field); put_link=link}}></input>
    }
    return(
        <>
            <Popup_modal active={popup_visible} setActive={set_popup_visible}>
                {popup_visible&&edit_data}
                <br></br>
                {invalid&&subtext}
                <br></br>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <input type='button' value='изменить' onClick={()=>change_value()}/>
                </div>
            </Popup_modal>
            <table>
            <tbody>
                {/* <view_data lable={'Имя'} field={'name'} link={'/api/athlet/name'}/> */}
                {view_data('Имя', 'name', 'text', '/api/athlet/name')}
                {view_data('Фамилия:','surname', 'text')}
                {view_data('Отчество:','fatherName', 'text')}
                {view_data('Школа:','educationalOrganization', 'text')}
                {view_data('Класс:','educationalClass', 'text')}
                {view_data('Почта:','email', 'email')}
                {view_data('Телефон:','phoneNumber', 'tel')}
            </tbody>
        </table>
        </>
    )
}

export default Profile
