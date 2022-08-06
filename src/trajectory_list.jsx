import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { home_btn, personal_space_btn, bottom_info, uni_btn, user_btn, login_btn, register_btn, base_url } from "./home"
import { get_req } from "./utils/requests-api"


const TrajectoryList = (id) =>{
    const data = {}//get_req('')
    const trajectories = [{},{},{},{},{},{},{},{},{},{}]//get_req('')
    useEffect(() => {
        document.title = `Направления`;
    })
    return(
        <>
            <div className="head_wrap">
                
                <div className="head_panel">
                    {uni_btn}
                    {home_btn}
                    {login_btn}
                    {register_btn}
                    {/* {user_btn} */}
                    {personal_space_btn}
                </div>
            </div>
            <span className="title_span">Направления</span>
            <div className="grid_container">
                {trajectories.map(elem => (
                    trajectory_div(elem)
                ))}
            </div>
            {bottom_info}
        </>
    )
}

export default TrajectoryList

const trajectory_div = (elem) =>{
    return(
            <Link to='/trajectory'>
                <div /*key={elem.id}*/ className="grid_item" >
                    Название направлений
                    Описание
                    Кому пригодится
                </div>
            </Link>
    )
}