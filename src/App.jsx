import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventPage from './pages/events-page/EventPage';
import MainPage from './pages/main-page/MainPage';
import PersonalPage from './pages/personal-page/PersonalPage';
import RegistrationPage from './pages/registration-page/RegistrationPage';

import './scss/index.scss';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/personal" element={<PersonalPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
