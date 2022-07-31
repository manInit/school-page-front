import { useEffect } from "react"
import { get_req } from "./utils/requests-api"
// import '../public/grid.css'

export const base_url = 'http://localhost:3000'
// export const home_btn = <input type="button" value='⌂' className='home_btn' onClick={() => {window.location.href=base_url}}/>
export const home_btn = <div value='⌂' className='home_btn' onClick={() => {window.location.href=base_url}}><span>⌂</span></div>
export const personal_space_btn = <input type='button' value='Личный кабинет' style={{marginLeft: 'auto'}} onClick={()=>{window.location.href=base_url+'/personal'}} />
export const user_btn = <span className="user_fi">Имя Фамилия</span>
export const login_btn = <input type='button' value='Вход' onClick={()=>{window.location.href=base_url+'/login'}}/>
export const register_btn = <input type='button' value='Регистрация' style={{marginLeft: 'auto'}} onClick={()=>{window.location.href=base_url+'/register'}}/>

const Home = () =>{
    useEffect(() => {
        document.title = `Домашняя`;
    })
    const trajectories = [{},{},{},{},{},{},{},{},{},{}]//get_req('')
    return(
        <>
            <div className="head_panel">
                {login_btn}
                {register_btn}
            </div>
             <div className="grid_container">
                {trajectories.map(elem => (
                    trajectory_div(elem)
                ))}
            </div>
        </>
    )
}

const trajectory_div = (elem) =>{
    return(
        <div /*key={elem.id}*/ className="grid_item" onClick={()=>window.location.href=base_url+'/trajectory'}>
            Траектория развития
        </div>
    )
}

export default Home