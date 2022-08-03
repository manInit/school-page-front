import { useState } from "react"


// const values ={
//     name: '',
//     surname: '',
//     fatherName: '',
//     educationalOrganization: '',
//     educationalClass: '',
//     email: '',
//     phoneNumber: ''
// }
const values ={
    name: 'Вова',
    surname: 'Гельштейн',
    fatherName: 'Максимович',
    educationalOrganization: 'мяумяуСОШ',
    educationalClass: '10В',
    email: 'чёта',
    phoneNumber: '+7832923'
}
const falses = (()=>{
    const a = []
    for (let i in values)
        a[i] = !!values[i]
    return a
})()

const subtext = <span style={{color:'red', fontSize: '80%'}}>*недопустимый формат</span>
const input_type = (type, name) =>{
    return <input type={type} name={name} onChange={e=>{values[name]=e.target.value}}/>
}


const Profile = () =>{
    const [invalids, setInvalids] = useState(falses)    
    const line_field = (lable, field, type) =>{
        return(
            <>
                <tr><td>{lable} </td><td><span>{values[field]}</span>{input_type(type, field)}</td><td>{edit_btn(field, '/api/athlet/name')}</td></tr>
                <tr><td></td><td>{invalids[field]&&subtext}</td></tr>
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
        return <input type="button" value="✐" onClick={(e) => {change_value(field, e.target, link)}}></input>
    }
    return(
        <>
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
