import { useEffect } from "react";
import { home_btn, user_btn } from "./home"

//title="Личный кабинет"

const Personal = () =>{
    useEffect(() => {
        document.title = `Личный кабинет`;
    })
    return(
        <>
            {home_btn}
            {user_btn}
            <input type='button' value='Выход' onClick={()=>{}} />
        </>
    )
}

export default Personal