import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './font/Font.css';
import { BrowserRouter } from 'react-router-dom';
import { Buffer } from 'buffer';

const root = ReactDOM.createRoot(document.getElementById('root'));
global.Buffer = global.Buffer || require('buffer').Buffer;
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);