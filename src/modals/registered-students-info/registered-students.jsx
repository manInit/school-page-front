import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Table, ToggleButton } from 'react-bootstrap';

import './index.scss';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const EventInfoRegistered = observer(({ event }) => {
  const eventData = {
    name: event.name,
    description: event.description,
    date: event.date,
    from_ball: event.participationPoint,
  };
  useEffect(()=>{
    console.log(toggleActive)
  })
  const accounts_data = event.users;
  const [toggleActive, setToggleActive] = useState(accounts_data.map(elem => {return !!elem.appointment}))
  const viewInfoBtn = (elem, key) => (
    <ToggleButton
      key={key}
      type="checkbox"
      id={'toggle_checkbox'+key}
      variant="outline-secondary"
      checked={toggleActive[key]}
      onChange={() => {
        axios.post(`api/activities/${elem.id}/appointment`, {user_id: elem.id, status: !toggleActive[key]})
          .then(()=>{
            setToggleActive(arr => ({...arr, [key]: !toggleActive[key]}))
          })  
          .catch((e) => {
            console.log(e)
          })
      }}
    >
      <FontAwesomeIcon style={{width: '2em'}} icon={toggleActive[key]? 'fa-check' : 'fa-xmark'}/>
    </ToggleButton>
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
              <td>Присутствие</td>
            </tr>
          </thead>
          <tbody>
            {accounts_data.map((elem, i) => (
              <tr key={i}>
                <td>{elem.surname}</td>
                <td>{elem.name}</td>
                <td>{elem.patronym}</td>
                <td>{viewInfoBtn(elem, i)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
});

export default EventInfoRegistered;
