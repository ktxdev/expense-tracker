import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SpinnerProvider } from './context/SpinnerContext';
import { AlertProvider } from './context/AlertContext';

ReactDOM.render(
  <BrowserRouter>
    <SpinnerProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </SpinnerProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
