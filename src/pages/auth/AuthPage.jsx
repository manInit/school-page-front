import React from 'react';

import './index.scss';

function AuthPage() {
  return (
    <div className='main-page'>
      <div className="container mt-5">
        <div className="row gap-4">
          <div className="border col-md-5 col-sm-12 pb-4">
            <h3 className='text-center pt-3'>Вход</h3>
            <form>
              <div>
                <label htmlFor="login-email" className="form-label">Почта</label>
                <input required id="login-email" type="text" className="form-control" placeholder="E-mail..." />
              </div>
              <div className="mt-2">
                <label htmlFor="login-pass" className="form-label">Пароль</label>
                <input required id="login-pass" type="password" className="form-control" placeholder="Пароль..."/>
              </div>
              <div className='mt-3 d-flex justify-content-end'>
                <button className='btn btn-primary'>Войти</button>
              </div>
            </form>
          </div>
          <div className="border col-md-5 offset-md-1 col-sm-12 pb-4">
            <h3 className='text-center pt-3'>Регистрация</h3>
            <form>
              <div>
                <label htmlFor="reg-second-name" className="form-label">Фамилия</label>
                <input required id="reg-second-name" type="text" className="form-control" placeholder="Фамилия..."/>
              </div>
              <div className='mt-3'>
                <label htmlFor="reg-first-name" className="form-label">Имя</label>
                <input required id="reg-first-name" type="text" className="form-control" placeholder="Имя..."/>
              </div>
              <div className='mt-3'>
                <label htmlFor="reg-middle-name" className="form-label">Отчество</label>
                <input required id="reg-middle-name" type="text" className="form-control" placeholder="Отчетсво..."/>
              </div>
              <div className='mt-3'>
                <label htmlFor="reg-city" className="form-label">Населенный пункт образовательного учреждения</label>
                <input required id="reg-city" type="text" className="form-control" placeholder="Населенный пункт..."/>
              </div>
              <div className='mt-3'>
                <label htmlFor="reg-school" className="form-label">Наименование образовательного учреждения</label>
                <input required id="reg-school" type="text" className="form-control" placeholder="Наименование образовательного учреждения..."/>
              </div>
              <div className='mt-3'>
                <label htmlFor="reg-class" className="form-label">Класс</label>
                <input required id="reg-class" type="text" className="form-control" placeholder="Класс..."/>
              </div>
              <div className='mt-3'>
                <label htmlFor="reg-telephone" className="form-label">Номер телефона</label>
                <input required id="reg-telephone" type="tel" className="form-control" placeholder="Номер телефона..."/>
              </div>
              <div className='mt-3'>
                <label htmlFor="login-email" className="form-label">Почта</label>
                <input required id="login-email" type="text" className="form-control" placeholder="E-mail..." />
              </div>
              <div className='mt-3'>
                <label htmlFor="login-pass" className="form-label">Пароль</label>
                <input required id="login-pass" type="password" className="form-control" placeholder="Пароль..."/>
              </div>
              <div className='mt-3 d-flex justify-content-end'>
                <button className='btn btn-primary'>Зарегистрироваться</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
