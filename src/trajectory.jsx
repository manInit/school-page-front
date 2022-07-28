import { home_btn, personal_space_btn, user_btn } from "./home"
import { get_req } from "./utils/requests-api"


const Trajectory = (id) =>{
    const data = {}//get_req('')
    return(
        <>
            {home_btn}
            {user_btn}
            {personal_space_btn}
        </>
    )
}

export default Trajectory