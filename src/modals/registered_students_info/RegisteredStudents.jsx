import React from 'react';
import './RegisteredStudents.scss';

const EventInfoRegistered = ({setActive}) => {
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

  const accounts_data = [
    {
      name: 'Имя',
      surname: 'Фамилия',
      patronym: 'Отчество',
    },
    {
      name: 'Имя2',
      surname: 'Фамилия',
      patronym: 'Отчество',
    }
  ];
  const viewInfoBtn = <button>👁</button>;
  // console.log(acc_json.get_info+acc_json.id)
  return(
    <>
      <div style={{width: '80%', marginLeft: '10%'}}>
        <div style={{display: 'grid', gridTemplateColumns: '85% 5% 10%'}}>
          <span className='brick'>
            {eventData.name}
          </span>
          <span/>
          <span className='brick' style={{textAlign: 'center'}} onClick={()=>{setActive(false);}}>&#x2715;</span>
        </div>
        <div className='brick' style={{whiteSpace: 'pre-line'}} >
          {eventData.description}
        </div>
        <table className='registered-student' style={{width: '100%'}}>
          <thead>
            <tr style={{borderBottom: 'solid 2px'}}>
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Отчество</td>
            </tr>
          </thead>
          <tbody>
            {accounts_data.map((elem, i)=>(
              <tr key={i}><td>{elem.surname}</td><td>{elem.name}</td><td>{elem.patronym}</td><td>{viewInfoBtn}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EventInfoRegistered;