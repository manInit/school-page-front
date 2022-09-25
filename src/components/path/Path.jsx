import React, { useState } from 'react';

import './index.scss';

// eslint-disable-next-line no-unused-vars
function Path({ img, title, events }) {
  const [showList, setShowList] = useState(false);
  const trueHover = () => {
    setShowList(true);
  };
  const falseHover = () => {
    setShowList(false);
  };
  return (
    <div className='path'>
      <div className='path__img'>
        <img src={img} alt='path img' />
      </div>
      {!showList && (
        <div
          onMouseEnter={trueHover}
          onMouseLeave={falseHover}
          className='path__title'
        >
          {title}
        </div>
      )}
      {showList && (
        <div onMouseLeave={falseHover} className='path__list'>
          {events.map((event) => (
            <div key={event.title} className='path__elem'>
              {event.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Path;
