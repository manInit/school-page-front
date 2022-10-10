import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { emailRegExp } from '../../utils';
import { loginRequest } from '../../services/auth';
import './index.scss';

function AuthPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    loginRequest(data);
  };

  return (
    <div className='main-page mx-auto'>
      <div className='container mt-5'>
        <div className='row'>
          <div className='border pb-4'>
            <h3 className='main-page__title text-center pt-3'>Вход</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
              <div>
                <input
                  {...register('username', {
                    required: true,
                    pattern: emailRegExp,
                  })}
                  id='login-email'
                  type='text'
                  className='school-input form-control'
                  placeholder='E-mail...'
                />
                {errors.username && (
                  <div className='ms-2 invalid-feedback d-block'>
                    Введите корректную почту
                  </div>
                )}
              </div>
              <div className='mt-3'>
                <input
                  {...register('password', {
                    required: true,
                  })}
                  id='login-pass'
                  type='password'
                  className='school-input form-control'
                  placeholder='Пароль...'
                />
                {errors.password && (
                  <div className='ms-2 invalid-feedback d-block'>
                    Введите пароль
                  </div>
                )}
              </div>
              <div className='mt-3 d-flex justify-content-end'>
                <button className='btn btn-primary w-100'>Войти</button>
              </div>
            </form>
            <p className='text-center mt-3'>
              Нет аккаунта? <Link to='/register'>Зарегистрироваться</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
