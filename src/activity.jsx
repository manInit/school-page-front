import { useEffect, useState } from "react";
import { home_btn, personal_space_btn, bottom_info, uni_btn, user_btn, login_btn, register_btn, base_url, trajectory_btn } from "./home"
import Popup_modal from "./popup/popup_modal";


const Activity = () =>{
    useEffect(() => {
        document.title = `Мероприятие`;
    })
    const [visible_confirm, set_visible_confirm] = useState(false)
    //const data = get_req('')
    return(
        <>
            <Popup_modal active={visible_confirm} setActive={set_visible_confirm}>
                <div style={{textAlign: 'center'}}>
                    ну, чё, Уверен?<br></br>
                    <input type='button' value='Да' onClick={()=>{set_visible_confirm(false)}}/>
                    <input type='button' value='Нет' style={{marginLeft: '20px'}} onClick={()=>{set_visible_confirm(false)}}/>
                </div>

            </Popup_modal>
            <div className="head_wrap">
                <div className="head_panel">
                    {uni_btn}
                    {home_btn}
                    {trajectory_btn}
                    {login_btn}
                    {register_btn}
                    {/* {user_btn} */}
                    {personal_space_btn}
                </div>
            </div>
            <span className="title_span">Activity name</span>
            <div className="content_block">
                <div className="content_container">
                    описание мероприятия<br></br> 
                    Дата и место<br></br>
                    Эхх побольше бы информации...
                    <input type='button' value='Запись' onClick={()=>{set_visible_confirm(true)}}/>
                    <br></br><br></br><br></br><br></br><br></br>
                </div>        
            </div>
            {bottom_info}
        </>
    )
}

export default Activity