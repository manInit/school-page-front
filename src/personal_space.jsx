import { useEffect } from "react";
import { base_url, home_btn, user_btn } from "./home"
//title="Личный кабинет"

const Personal = () =>{
    useEffect(() => {
        document.title = `Личный кабинет`;
    })
    const trajectories = [{},{},{},{},{},{},{},{}]
    return(
        <>
            {home_btn}
            {user_btn}
            <input type='button' value='Выход' onClick={()=>{}} />
            <div className="personal_trajectories">
                {trajectories.map(elem =>(
                    trajectory_div(elem)    
                ))}
            </div>
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