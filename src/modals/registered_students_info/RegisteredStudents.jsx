import React from 'react';
import './RegisteredStudents.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Table } from 'react-bootstrap';

const EventInfoRegistered = ({event}) => {
  // const acc_data = get_req(`/api/account/id/${id}`)
  const eventData = {
    event: event.name,
    description: `Олимпиада проводится для учащихся 8-11 классов и студентов СПО по предметам:
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
    to_ball: 8
  };

  const accounts_data = [
    {
      name: 'Имя',
      surname: 'Фамилия',
      patronym: 'Отчество'
    },
    {
      name: 'Имя2',
      surname: 'Фамилия',
      patronym: 'Отчество'
    },
    {
      name: 'Имя2',
      surname: 'Фамилия',
      patronym: 'Отчество'
    }
  ];
  const viewInfoBtn = (
    <Button variant='secondary'>
      <FontAwesomeIcon icon='fa-solid fa-eye' />
    </Button>
  );
  // console.log(acc_json.get_info+acc_json.id)
  return (
    <>
      <div style={{ width: '80%', marginLeft: '10%' }}>
        <div>
          <Card className='brick' style={{fontSize: '1.8em'}}>{eventData.name}</Card>
        </div>
        <Card className='brick' style={{marginBottom: '1em', whiteSpace: 'pre-line' }}>
          {eventData.description}
        </Card>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>Фамилия</td>
              <td>Имя</td>
              <td>Отчество</td>
            </tr>
          </thead>
          <tbody>
            {accounts_data.map((elem, i) => (
              <tr key={i}>
                <td>{elem.surname}</td>
                <td>{elem.name}</td>
                <td>{elem.patronym}</td>
                <td>{viewInfoBtn}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default EventInfoRegistered;
