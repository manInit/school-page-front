import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { emailRegExp } from '../../utils';
import InputMask from 'react-input-mask';
import './index.scss';

function RegisterPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='main-page mx-auto'>
      <div className='container mt-5 pb-5'>
        <div className='row'>
          <div className='border pt-3'>
            <h3 className='main-page__title text-center pt-3'>Регистрация</h3>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
              <div>
                <input
                  {...register('secondName', {
                    required: true,
                    pattern: /^[А-Яа-я]+$/i,
                  })}
                  id='reg-second-name'
                  type='text'
                  className='school-input form-control'
                  placeholder='Фамилия...'
                />
                {errors.secondName && (
                  <div className='ms-2 invalid-feedback d-block'>
                    Введите фамилию
                  </div>
                )}
              </div>
              <div className='mt-3'>
                <input
                  {...register('firstName', {
                    required: true,
                    pattern: /^[А-Яа-я]+$/i,
                  })}
                  id='reg-first-name'
                  type='text'
                  className='school-input form-control'
                  placeholder='Имя...'
                />
                {errors.firstName && (
                  <div className='ms-2 invalid-feedback d-block'>
                    Введите имя
                  </div>
                )}
              </div>
              <div className='mt-3'>
                <input
                  {...register('middleName', {
                    required: true,
                    pattern: /^[А-Яа-я]+$/i,
                  })}
                  id='reg-middle-name'
                  type='text'
                  className='school-input form-control'
                  placeholder='Отчество...'
                />
                {errors.middleName && (
                  <div className='ms-2 invalid-feedback d-block'>
                    Введите отчество
                  </div>
                )}
              </div>
              <div className='mt-3'>
                <input
                  {...register('city', {
                    required: true,
                  })}
                  id='reg-city'
                  type='text'
                  className='school-input form-control'
                  placeholder='Населенный пункт...'
                />
                {errors.city && (
                  <div className='ms-2 invalid-feedback d-block'>
                    Введите город
                  </div>
                )}
              </div>
              <div className='mt-3'>
                <input
                  {...register('school', {
                    required: true,
                  })}
                  id='reg-school'
                  type='text'
                  className='school-input form-control'
                  placeholder='Наименование образовательного учреждения...'
                />
                {errors.school && (
                  <div className='ms-2 invalid-feedback d-block'>
                    Введите школу
                  </div>
                )}
              </div>
              <div className='mt-3'>
                <input
                  {...register('class', {
                    required: true,
                  })}
                  id='reg-class'
                  type='text'
                  className='school-input form-control'
                  placeholder='Класс...'
                />
                {errors.class && (
                  <div className='ms-2 invalid-feedback d-block'>
                    Введите класс
                  </div>
                )}
              </div>
              <div className='mt-3'>
                <Controller
                  name='telephone'
                  control={control}
                  render={({field: { onChange }}) => (
                    <InputMask
                      onChange={onChange}
                      alwaysShowMask 
                      className='school-input form-control'
                      mask='+7 (999) 999-99-99'
                    />
                  )}
                />
                {errors.telephone && (
                  <div className='ms-2 invalid-feedback d-block'>
                    Введите телефон
                  </div>
                )}
              </div>
              <div className='mt-3'>
                <input
                  {...register('email', {
                    required: true,
                    pattern: emailRegExp,
                  })}
                  id='login-email'
                  type='text'
                  className='school-input form-control'
                  placeholder='E-mail...'
                />
                {errors.email && (
                  <div className='ms-2 invalid-feedback d-block'>
                    Введите E-mail
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
                <button className='btn btn-primary w-100'>
                  Зарегистрироваться
                </button>
              </div>
            </form>
            <p className='text-center mt-3'>
              Уже есть аккаунт? <Link to='/'>Войти</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
