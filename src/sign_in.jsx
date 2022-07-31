import { useEffect } from "react";
import { home_btn } from "./home";


const Sign_in = () =>{
    useEffect(() => {
        document.title = `Авторизация`;
    })
    return(
        <>
            {home_btn}
            
        </>
    )
}

export default Sign_in