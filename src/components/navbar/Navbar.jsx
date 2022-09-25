import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

function Navbar({ className }) {
  return (
    <nav className={`navbar ${className}`}>
      <Link className='navbar__link' to='/event'>Мероприятия</Link>
      <Link className='navbar__link' to='/'>Карта</Link>
      <Link className='navbar__link' to='/personal'>Личный кабинет</Link>
      <Link className='navbar__link' to='/'>Вход</Link>
    </nav>
  );
}

export default Navbar;
