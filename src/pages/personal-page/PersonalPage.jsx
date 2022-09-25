import React from 'react';
import Header from '../../components/header/Header';

import './index.scss';

function PersonalPage() {
  const data = {
    data: [
      {
        title: 'Олимпиада для школьников',
        points: '8 баллов'
      },
      { 
        title: `Олимпиада для школьников
        текст текст текст текст текст
        текст текст текст текст текст
        текст текст текст текст текст
        текст текст текст текст текст`,
        points: '10 баллов'
      },
      { 
        title: `Олимпиада для школьников
        текст текст текст текст текст
        текст текст текст текст текст
        текст текст текст текст текст
        текст текст текст текст текст`,
        points: '10 баллов'
      },
      { 
        title: `Олимпиада для школьников
        текст текст текст текст текст
        текст текст текст текст текст
        текст текст текст текст текст
        текст текст текст текст текст`,
        points: '10 баллов'
      }
    ],
    total: '18 баллов'
  };

  return (
    <main className="personal-page">
      <Header />
      <div className="personal-page__content">
        <div className="personal-page__block">
          <div className="personal-page__titles">
            <div className="personal-page__elem personal-page__elem_title">
              Мероприятия
            </div>
            <div className="personal-page__elem personal-page__elem_title">
              Ваши баллы
            </div>
          </div>          
          <div className='personal-page__events'>
            {data.data.map(event => (
              <>
                <div className="personal-page__elem">
                  {event.title}
                </div>
                <div className="personal-page__elem">
                  {event.points}
                </div>
              </>
            ))}
            <div className="personal-page__elem">
              Итого
            </div>
            <div className="personal-page__elem">
              {data.total}
            </div>
          </div>
        </div>
      </div>
    </main>
  );  
}

export default PersonalPage;