import React from 'react';
import { Card } from 'react-bootstrap';

import './index.scss';

const EventInfo = ({ event }) => {
  const eventData = {
    name: event.name,
    description: event.description,
    date: event.startDate,
    from_ball: event.participationPoint,
  };

  return (
    <>
      <div style={{ width: '80%', marginLeft: '10%' }}>
        <Card className='brick' style={{ fontSize: 'x-large' }}>
          {eventData.name}
        </Card>
        <Card className='brick' style={{ whiteSpace: 'pre-line' }}>
          {eventData.description}
        </Card>
        <div
          style={{
            textAlign: 'center',
            display: 'grid',
            gridTemplateColumns: '30% 40% 30%',
          }}
        >
          <Card className='brick'>{eventData.date}</Card>
          <Card className='brick' style={{ margin: '1em 1em 0em 1em' }}>
            {eventData.from_ball}-{eventData.to_ball} баллов
          </Card>
          <Card
            className='brick'
            style={{ cursor: 'pointer' }}
            onClick={() => {}}
          >
            Подать заявку
          </Card>
        </div>
      </div>
    </>
  );
};

export default EventInfo;
