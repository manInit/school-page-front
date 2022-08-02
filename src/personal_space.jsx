import { useEffect } from "react";
import { base_url, home_btn, bottom_info, uni_btn, user_btn } from "./home"
import Profile from "./personal_components/profile";

const Personal = () =>{
    useEffect(() => {
        document.title = `Личный кабинет`;
    })

    const trajectories = [{},{},{},{},{},{},{},{}]
    return(
        <>
            <div className="head_wrap">
                {uni_btn}
                {home_btn}
                <div className="head_panel">
                    {user_btn}
                    <input type='button' value='Выход'  style={{marginLeft: 'auto'}} onClick={()=>{}} />
                </div>
            </div>
            <div className="personal_space_title">
                <div className="personal_space_title_btn">Мероприятия</div>
                <div className="personal_space_title_btn">Достижения</div>
                <div className="personal_space_title_btn">Баллы</div>
                <div className="personal_space_title_btn">Профиль</div>
            </div>
            <div className="content_container">
                <Profile />
            </div>
            <div className="personal_trajectories" hidden>
                {trajectories.map(elem =>(
                    trajectory_div(elem)    
                ))}
            </div>
            {bottom_info}
        </>
    )
}

export default Personal

const trajectory_div = (elem) =>{
    return(
        <>
            <div /*key={elem.id}*/ className="personal_trajectories_item" onClick={()=>window.location.href=base_url+'/trajectory'}>
                Траектория развития
            </div>
            {[[]].map(elem => (
                trajectory_activity(elem)
            ))}
        </>
    )
}

const trajectory_activity = (elem) =>{
    return(
        <div /*key={elem.id}*/ className="personal_trajectories_activity" onClick={()=>{}}>
            Активность
        </div>
    )
}