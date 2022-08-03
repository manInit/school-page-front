import { useEffect } from "react"
import { home_btn, personal_space_btn, bottom_info, uni_btn, user_btn } from "./home"
import { get_req } from "./utils/requests-api"


const Trajectory = (id) =>{
    const data = {}//get_req('')
    const trajectories = [{},{},{},{},{},{},{},{},{},{}]//get_req('')
    useEffect(() => {
        document.title = `Траектория`;
    })
    return(
        <>
            <div className="head_wrap">
                {uni_btn}
                {home_btn}
                <div className="head_panel">

                    {user_btn}
                    {personal_space_btn}
                </div>
            </div>
            <div className="grid_container">
                {trajectories.map(elem => (
                    trajectory_div(elem)
                ))}
            </div>
            {bottom_info}
        </>
    )
}

export default Trajectory

const trajectory_div = (elem) =>{
    return(
        <div /*key={elem.id}*/ className="grid_item" onClick={()=>{}}>
            Траектория развития
        </div>
    )
}