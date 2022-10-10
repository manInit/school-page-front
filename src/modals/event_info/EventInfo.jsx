import React from 'react';
import { Card } from 'react-bootstrap';
import './EventInfo.css';

const EventInfo = ({event}) => {
  // const acc_data = get_req(`/api/account/id/${id}`)
  const eventData = { 
    name: event.name, 
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
    date: event.date,
    from_ball: 6,
    to_ball: 8,
  };

  // console.log(acc_json.get_info+acc_json.id)
  return(
    <>
      <div style={{width: '80%', marginLeft: '10%'}}>
        <Card className='brick' style={{fontSize: 'x-large'}}>
          {eventData.name}
        </Card>
        <Card className='brick' style={{whiteSpace: 'pre-line'}}>
          {eventData.description}
        </Card>
        <div style={{textAlign: 'center', display: 'grid', gridTemplateColumns: '30% 40% 30%'}}>
          <Card className='brick'>
            {eventData.date}
          </Card>
          <Card className='brick' style={{margin: '1em 1em 0em 1em'}}>
            {eventData.from_ball}-{eventData.to_ball} баллов
          </Card>
          <Card className='brick' style={{cursor: 'pointer'}} onClick={()=>{}}>
            Подать заявку 
          </Card>
        </div>
      </div>
    </>
  );
};

export default EventInfo;