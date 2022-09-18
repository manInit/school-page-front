import React from 'react';

import logo from '../../assets/images/logo-istu.png';

import './index.scss';

function IstuLogo({ className }) {
  return (
    <div className={`istu-logo ${className ?? ''}`}>
      <img className='istu-logo__image' src={logo} alt="istu logo" />
      <div className='istu-logo__titles'>
        <h3 className='istu-logo__title'>Иркутский политех</h3>
        <span className='istu-logo__full-name'>Иркутский национальный исследоватльский технический университет</span>
      </div>
    </div>
  );  
}

export default IstuLogo;