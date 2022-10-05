import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IstuLogo from '../istu-logo/IstuLogo';

import './index.scss';

function NavbarLink({ className }) {
  return (
    <Navbar expand='lg' className={'w-100 d-flex ' + className}>
      <Navbar.Brand href='/'>
        <div className='header__logo flex-grow-1'>
          <IstuLogo />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='navbar__link' to='/'>
                Мероприятия
              </Link>
            </li>
            <li className='nav-item mx-lg-4'>
              <Link className='navbar__link' to='/'>
                Карта
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='navbar__link' to='/'>
                Личный кабинет
              </Link>
            </li>
            <li className='nav-item mx-lg-4'>
              <Link className='navbar__link' to='/'>
                Вход
              </Link>
            </li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarLink;
