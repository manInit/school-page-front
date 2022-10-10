import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import AuthPage from './pages/auth/AuthPage';
import RegisterPage from './pages/register/RegisterPage';

import './scss/index.scss';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/events" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
