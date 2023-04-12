import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// css
import './assets/css/main.css';
import './assets/css/app.css';
import './assets/css/data-input.css';
import './assets/css/data-output.css';
// context
import { DateContextProvider } from './context/DateContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <DateContextProvider>
    <App />
  </DateContextProvider>
)
