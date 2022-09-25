import React from 'react';
import Header from '../../components/header/Header';
import Path from '../../components/path/Path';
import img from '../../assets/images/path.png';

import './index.scss';

function EventPage() {
  const events = [
    {
      title: 'Мероприятие #1'
    },
    {
      title: 'Мероприятие #2'
    },
    {
      title: 'Олимпиада'
    },
    {
      title: 'Меропирятие #3'
    }
  ];

  return (
    <main className="event-page">
      <Header />
      <div className="event-page__content">
        <h1 className='event-page__title'>Траектории развития</h1>
        <div className="event-page__paths">
          <Path 
            img={img}
            title='Строитель'
            events={events}
          />
          <Path 
            img={img}
            title='Инженер'
            events={events}
          />
          <Path 
            img={img}
            title='Программист'
            events={events}
          />
          <Path 
            img={img}
            title='Дизайнер'
            events={events}
          />
        </div>
      </div>
    </main>
  );  
}

export default EventPage;