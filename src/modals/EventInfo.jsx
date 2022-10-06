import React from 'react';
import './EventInfo.css';

const EventInfo = ({}) => {
  // const acc_data = get_req(`/api/account/id/${id}`)
  const eventData = { 
    name: 'Межпредметная олимпиада школьников «Политехник»', 
    description: 
    `Олимпиада проводится для учащихся 8-11 классов и студентов СПО по предметам:

    Физика
    Химия
    Математика
    Информатика
    Техническое черчение (обучающая лекция решения заданий)
    3D моделирование инженерных объектов
    Современная энергетика
    Современное самолетостроение (запуск в 2022/2023 уч.г.)`,
    date: '24.10',
    from_ball: 6,
    to_ball: 8,
  };

  // console.log(acc_json.get_info+acc_json.id)
  return(
    <>
      <div style={{width: '80%', marginLeft: '10%'}}>
        <div className='brick' style={{fontSize: 'x-large'}}>
          {eventData.name}
        </div>
        <div className='brick' style={{whiteSpace: 'pre-line'}}>
          {eventData.description}
        </div>
        <div style={{textAlign: 'center', display: 'grid', gridTemplateColumns: '30% 40% 30%'}}>
          <span className='brick'>
            {eventData.date}
          </span>
          <span className='brick' style={{margin: '1em 1em 0em 1em'}}>
            {eventData.from_ball}-{eventData.to_ball} баллов
          </span>
          <span className='brick' onClick={()=>{}}>
            Подать заявку 
          </span>
        </div>
      </div>
    </>
  );
};

export default EventInfo;