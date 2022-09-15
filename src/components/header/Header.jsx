import React from 'react';
import IstuLogo from '../istu-logo/IstuLogo';
import Navbar from '../navbar/Navbar';

import './index.scss';

function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <IstuLogo />
      </div>
      <Navbar className='header__navbar' />
    </header>
  );
}

export default Header;
