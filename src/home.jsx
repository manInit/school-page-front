import { useEffect } from "react"
import { get_req } from "./utils/requests-api"
import uni_logo from './pics/4746124.png'
import { Link } from "react-router-dom"
// import '../public/grid.css'
export const base_url = 'http://localhost:3000'
// export const home_btn = <input type="button" value='⌂' className='home_btn' onClick={() => {window.location.href=base_url}}/>
export const uni_btn = <div className='uni_btn' onClick={() => {window.location.href='https://www.istu.edu'}}><img src={uni_logo} width='40' alt="uni_logo"/></div>
export const home_btn = <Link to='/'><input type='button' value='⌂' className='home_btn'/></Link>
export const trajectory_btn = <Link to='/trajectory_list'><input type='button' className='trajectory_btn' value='Направления'/></Link>
export const personal_space_btn = <Link to='/personal'><input type='button' value='Личный кабинет' style={{marginLeft: 'auto'}} /></Link>
export const user_btn = <span className="user_fi">Имя Фамилия</span>
export const register_btn = <Link to='/register'><input type='button' value='Регистрация' style={{marginLeft: 'auto'}} /></Link>
export const login_btn = <Link to='/login'><input type='button' value='Вход' /></Link>
export const bottom_info = <div className="under_line">чё то там будет</div>

const Home = () =>{
    useEffect(() => {
        document.title = `Домашняя`;
    })
    return(
        <>
            <div className="head_panel">
                {uni_btn}
                {trajectory_btn}
                {login_btn}
                {register_btn}
            </div>
            тут штуки будут...
            {bottom_info}
        </>
    )
}

export default Home

