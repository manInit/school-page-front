import { React, useEffect } from 'react';
import Button from './components/link_btn';
import uni_logo from './pics/4746124.png';
// import '../public/grid.css'
export const base_url = 'http://localhost:3000';
// export const home_btn = <input type="button" value='⌂' className='home_btn' onClick={() => {window.location.href=base_url}}/>
export const uni_btn = (
  <div
    className='uni_btn'
    onClick={() => {
      window.location.href = 'https://www.istu.edu';
    }}
  >
    <img src={uni_logo} width='40' alt='uni_logo' />
  </div>
);
export const home_btn = <Button link='/' value='⌂' className='home_btn' />;
export const trajectory_btn = (
  <Button
    link='/trajectory_list'
    className='trajectory_btn'
    value='Направления'
  />
);
export const personal_space_btn = (
  <Button
    link='/personal'
    value='Личный кабинет'
    style={{ marginLeft: 'auto' }}
  />
);
export const user_fi = <span className='user_fi'>Имя Фамилия</span>;
export const register_btn = (
  <Button link='/register' value='Регистрация' style={{ marginLeft: 'auto' }} />
);
export const login_btn = <Button link='login' value='Вход' />;
export const bottom_info = <div className='under_line'>чё то там будет</div>;

const Home = () => {
  useEffect(() => {
    document.title = 'Домашняя';
  });
  return (
    <>
      <div className='head_panel'>
        {uni_btn}
        {trajectory_btn}
        {login_btn}
        {register_btn}
      </div>
      тут штуки будут...
      {bottom_info}
    </>
  );
};

export default Home;
