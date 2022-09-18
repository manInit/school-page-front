import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';

import './index.scss';

function MainPage() {
  return (
    <main className="main-page">
      <Header />
      <div className="main-page__content">
        <div className="main-page__info">
          <h1 className="main-page__title">Ирниту.Балл</h1>
          <p className="main-page__desc">
            ИРНИТУ. БАЛЛ позволяет набирать  баллы, которые 
            вы сможете обменять на дополнительные баллы к
            поступлению, получив сертификат “Успешный
            абитуриент”, или на сувенирную продукцию.
          </p>
          <p className="main-page__offer">
            Участвуйте в мероприятиях и собирайти баллы!
          </p>
        </div>
        <div className="main-page__registration">
          <button>
            <Link to='/register'>Регистрация</Link>
          </button>
        </div>
      </div>
    </main>
  );  
}

export default MainPage;