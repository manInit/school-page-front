import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Table } from 'react-bootstrap';

import './index.scss';
import { observer } from 'mobx-react-lite';

const EventInfoRegistered = observer(({ event }) => {
  const eventData = {
    name: event.name,
    description: event.description,
    date: event.date,
    from_ball: event.participationPoint,
  };

  const accounts_data = event.users;
  const viewInfoBtn = (
    <Button variant='secondary'>
      <FontAwesomeIcon icon='fa-solid fa-eye' />
    </Button>
  );

  return (
    <>
      <div style={{ width: '80%', marginLeft: '10%' }}>
        <div>
          <Card className='brick' style={{ fontSize: '1.8em' }}>
            {eventData.name}
          </Card>
        </div>
        <Card
          className='brick'
          style={{ marginBottom: '1em', whiteSpace: 'pre-line' }}
        >
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
});

export default EventInfoRegistered;
