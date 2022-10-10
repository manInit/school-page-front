import React from 'react';
import './index.scss';
export default function EventElement({ event, isAdmin, showModalFunction}) {
  const actionDescription = isAdmin ? 'Подробнее' : 'Подать заявку';
  return (
    <div className='event-element mb-4 row'>
      <div className='ms-4 col-2' >
        <div className='event-picture'>
        </div>
      </div>
      <div className='event-name align-middle col-6 '>{event.name}</div>
      <div className='event-date col'>{event.date}</div>
      <div className='event-action col btn btn-light' onClick={()=>showModalFunction(event)}>{actionDescription}</div>
    </div>
  );
}

