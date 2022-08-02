import { useEffect } from "react"
import { home_btn, personal_space_btn, under_line, uni_btn, user_btn } from "./home"
import { get_req } from "./utils/requests-api"


const Trajectory = (id) =>{
    const data = {}//get_req('')
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
            {under_line}
        </>
    )
}

export default Trajectory