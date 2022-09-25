import React from 'react';
import Header from '../../components/header/Header';

import './index.scss';

function RegistrationPage() {
  return (
    <main className='main-page'>
      <Header />
      <div className='main-page__content'>
        <div className='registration-block'>
          <div className='registration-block__content'>
            <input
              className='registration-input-form'
              placeholder='Фамилия'
              style={{ marginTop: '29px' }}
            />
            <input className='registration-input-form' placeholder='Имя' />
            <input className='registration-input-form' placeholder='Отчество' />
            <input
              className='registration-input-form'
              placeholder='Населённый пункт образовательного учреждения'
            />
            <input
              className='registration-input-form'
              placeholder='Наименование образовательного учреждения'
            />
            <input className='registration-input-form' placeholder='Класс' />
            <input
              className='registration-input-form'
              placeholder='Номер телефона'
            />
            <input className='registration-input-form' placeholder='E-mail' />
            <p>
              <div className='container'>
                <div className='round' style={{}}>
                  <input type='checkbox' id='checkbox' />
                  <label className='checkbox-image' htmlFor='checkbox'></label>
                  <label
                    className='checkbox-label'
                    htmlFor='checkbox'
                    style={{
                      marginLeft: '5px',
                      fontSize: '12px',
                      alignItems: 'center',
                      color: 'rgba(158, 86, 250, 0.75)',
                    }}
                  >
                    Согласие на обработку персональных данных
                  </label>
                </div>
              </div>
            </p>
            <div style={{ textAlign: 'center' }}>
              <input
                type={'button'}
                value='Регистрация'
                style={{
                  width: '422px',
                  height: '45px',
                  background: '#3155A3',
                  borderRadius: '15px',
                  color: 'white',
                  fontFamily: 'Proxima Nova',
                  fontSize: '20px',
                  outline: 'none',
                  border: 'none',
                  marginTop: '10px',
                  cursor: 'pointer'
                }}
              />
            </div>
          </div>
        </div>
        <div className='registration-block-shadow'></div>
      </div>
    </main>
  );
}

export default RegistrationPage;
