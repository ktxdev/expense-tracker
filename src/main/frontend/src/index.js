import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SpinnerProvider } from './context/SpinnerContext';

ReactDOM.render(
  <BrowserRouter>
    <SpinnerProvider>
      <App />
    </SpinnerProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
