import React from 'react';
import Navbar from '../navbar/Navbar';

import './index.scss';

function Header() {
  return (
    <header className='header d-flex align-items-center'>
      <Navbar className='header__navbar' />
    </header>
  );
}

export default Header;