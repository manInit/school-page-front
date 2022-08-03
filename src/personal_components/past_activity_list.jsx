

const PastActivityList = () =>{
    const list = [{},{},{},{}]
    return(
        <>
            {list.map(elem =>(
                elem_div(elem)
            ))}
        </>
    )
}

export default PastActivityList

const elem_div = (elem) =>{
    return(
        <div className="" style={{display: "flow-root", marginBottom: '8px', border: '1px solid black'}} onClick={()=>{}}>
            <div style={{float: "left"}}>
                <span >Описание Мероприятия</span><br></br>
                <span >Дата и место</span><br></br><br></br>
                <span >Название Мероприятия</span>
            </div>
            <div style={{float: "right"}}>
                <span style={{float: 'right'}}>молодец</span>
            </div>
        </div>
    )
}