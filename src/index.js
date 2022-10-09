import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
library.add(faEye);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
