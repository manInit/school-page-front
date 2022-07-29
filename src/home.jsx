import { useEffect } from "react"
import { get_req } from "./utils/requests-api"
// import '../public/grid.css'

export const base_url = 'http://localhost:3000'
export const home_btn = <input type="button" value='⌂' onClick={() => {window.location.href=base_url}}/>
export const personal_space_btn = <input type='button' value='Личный кабинет' onClick={()=>{window.location.href=base_url+'/personal'}} />
export const user_btn = <span>Имя Фамилия</span>

const Home = () =>{
    useEffect(() => {
        document.title = `Домашняя`;
    })
    const trajectories = [{},{},{},{},{},{},{},{},{},{}]//get_req('')
    return(
        <>
            <input type='button' value='Вход' onClick={()=>{}}/>
            <input type='button' value='Регистрация' onClick={()=>{window.location.href=base_url+'/register'}}/>
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