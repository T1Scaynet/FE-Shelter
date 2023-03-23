import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { Axios } from 'axios';

Axios.defaults.baseURL = process.env.REACT_APP_URL_BACKEND || 'http://localhost:3001';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
